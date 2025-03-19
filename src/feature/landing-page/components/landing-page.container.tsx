'use client'

import { getAllUsers } from "@/feature/users/actions/users.action";
import { useQuery } from "@tanstack/react-query";

export default function LandingPageContainer() {
  const { data } = useQuery({
    queryKey: ['get-users'],
    queryFn: () => getAllUsers(),
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}