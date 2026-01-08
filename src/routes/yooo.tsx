import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/yooo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/yooo"!</div>
}
