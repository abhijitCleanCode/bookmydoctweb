import SignUpPage from "@/features/auth/pages/SignUp"

const Page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-4">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
        {/* <div className="absolute top-0 left-0 right-0 h-48 bg-linear-to-b from-blue-100 via-blue-50 to-transparent opacity-40 blur-3xl -mt-20"></div> */}
        <SignUpPage />
      </section>
    </main>
  )
}

export default Page