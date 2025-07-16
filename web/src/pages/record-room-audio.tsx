import { useState } from 'react'
import { Button } from '@/components/ui/button'

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function'

export function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false)

  function startRecording() {
    if (!isRecordingSupported) {
      alert('Gravação de áudio não é suportada neste navegador.')
      return
    }
    setIsRecording(true)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <Button onClick={startRecording}>Iniciar Gravação</Button>
      {isRecording ? (
        <p className="mt-4 text-amber-50 text-lg">Gravando...</p>
      ) : (
        <p className="mt-4 text-amber-50 text-lg">Pausado</p>
      )}
    </div>
  )
}
