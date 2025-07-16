import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateQuestionRequest } from '../types/requests/create-question-request'
import type { CreateQuestionResponse } from '../types/responses/create-question-response'

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/room/${roomId}/questions`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const result: CreateQuestionResponse = await response.json()
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] })
    },
  })
}
