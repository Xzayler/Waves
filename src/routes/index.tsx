import { A } from "@solidjs/router";
import Login from "~/components/login/Login";

export default function MainPage() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <A href="/login">Log In here</A>
    </main>
  );
}
