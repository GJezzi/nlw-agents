import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRooms } from '@/http/hooks/use-rooms'
import { formatRelativeDate } from '@/utils/format-relative-date'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function RoomList() {
  const { data, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido às salas criadas recentemente
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas</p>
        )}
        {data?.map((room) => {
          return (
            <Link
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent"
              key={room.id}
              to={`/room/${room.id}`}
            >
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="text-xs" variant="secondary">
                    {formatRelativeDate(new Date(room.createdAt))}
                  </Badge>
                  <Badge className="text-xs" variant="secondary">
                    {room.questionsCount} pergunta(s)
                  </Badge>
                </div>
              </div>

              <span className="flex items-center gap-2 text-muted-foreground text-sm">
                Entrar
                <ArrowRight className="size-3" />
              </span>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}
