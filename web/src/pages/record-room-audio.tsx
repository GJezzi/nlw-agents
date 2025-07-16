/** biome-ignore-all lint/suspicious/noConsole: For testing */
import { useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function'

type RoomParams = {
  roomId: string
}

export function RecordRoomAudio() {
  const params = useParams<RoomParams>()

  const [isRecording, setIsRecording] = useState(false)
  const recorderRef = useRef<MediaRecorder | null>(null)

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('Gravação de áudio não é suportada neste navegador.')
      return
    }

    setIsRecording(true)

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    recorderRef.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    })

    recorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data)
      }
    }

    recorderRef.current.onstart = () => {
      console.log('Gravação iniciada')
    }

    recorderRef.current.onstop = () => {
      console.log('Gravação parada')
    }

    recorderRef.current.start()
  }

  function stopRecording() {
    setIsRecording(false)

    if (recorderRef.current && recorderRef.current.state !== 'inactive') {
      recorderRef.current.stop()
    } else {
      console.warn('Nenhuma gravação em andamento para parar.')
    }
  }

  async function uploadAudio(audioFile: Blob) {
    const formData = new FormData()

    formData.append('audio', audioFile, 'audio.webm')

    const response = await fetch(
      `http://localhost:3333/room/${params.roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    )

    const result = await response.json()

    console.log('Resultado do upload:', result)

    if (!response.ok) {
      console.error('Erro ao fazer upload do áudio:', response.statusText)
      return
    }

    console.log('Upload de áudio bem-sucedido:', result)
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar Gravação</Button>
      ) : (
        <Button onClick={startRecording}>Iniciar Gravação</Button>
      )}

      {isRecording ? (
        <p className="mt-4 text-amber-50 text-lg">Gravando...</p>
      ) : (
        <p className="mt-4 text-amber-50 text-lg">Pausado</p>
      )}
    </div>
  )
}
