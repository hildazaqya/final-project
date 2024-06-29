/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gAhfIgpAa9D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <h1 className="text-2xl font-bold">Movie Collection</h1>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search movies..."
              className="w-full rounded-md bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>
          <div className="flex items-center gap-2">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View movie</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="h-72 w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-primary-foreground">Movie Title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the movie.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View movie</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="h-72 w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-primary-foreground">Movie Title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the movie.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View movie</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="h-72 w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-primary-foreground">Movie Title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the movie.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View movie</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="h-72 w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-primary-foreground">Movie Title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the movie.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View movie</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="h-72 w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-primary-foreground">Movie Title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the movie.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View movie</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="h-72 w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-primary-foreground">Movie Title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the movie.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View movie</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="h-72 w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-primary-foreground">Movie Title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the movie.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View movie</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Movie Poster"
              width={300}
              height={450}
              className="h-72 w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-primary-foreground">Movie Title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the movie.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}