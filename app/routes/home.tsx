import type { Route } from "./+types/home"
import { Welcome } from "../welcome/welcome"
import _ from 'lodash'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_CLOUDFLARE }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  console.log({ _ })
  return <Welcome message={loaderData.message} />
}

