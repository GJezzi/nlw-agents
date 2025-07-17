import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateQuestionRequest } from '../types/requests/create-question-request'
import type { CreateQuestionResponse } from '../types/responses/create-question-response'
import type { GetRoomQuestionsResponse } from '../types/responses/get-room-questions-response'

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
    onMutate({ question }) {
      const questions =
        queryClient.getQueryData<GetRoomQuestionsResponse>([
          'get-questions',
          roomId,
        ]) || []

      const questionsArray = questions ?? []

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        [newQuestion, ...questionsArray]
      )

      return { newQuestion, questions }
    },
    onSuccess(data, _variables, context) {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        (questions) => {
          if (!questions) {
            return questions
          }

          if (!context?.questions) {
            return questions
          }

          return questions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
              }
            }
            return question
          })
        }
      )
    },
    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ['get-questions', roomId],
          context.questions
        )
      }
    },
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] })
    // },
  })
}
