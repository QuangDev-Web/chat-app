import { Button } from "@/components/ui/button"

type Props = {
    params: {
        userId: string;
    }
}
export default function UserDetails({
    params: {userId}
} : Props
) {
  return (
    <Button>User details : {userId}</Button>
  )
}
