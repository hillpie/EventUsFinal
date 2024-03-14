import  Link  from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <h1 className="text-base font-medium text-slate-400">EventUs</h1>
        </Link>
        <p className="text-base text-slate-400">
          2024 EventUs. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer