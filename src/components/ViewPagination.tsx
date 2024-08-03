import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface ViewPaginationProps {
  setPage: any
  currentPage?: number
}

const ViewPagination = ({ setPage, currentPage }: ViewPaginationProps) => (currentPage != null ? (
  <Pagination>
    <PaginationContent>
      <PaginationItem>

        <PaginationPrevious
          onClick={() => setPage((prev: number) => prev == 0 ? prev : prev - 1)} 
          className="cursor-pointer"
        />

      </PaginationItem>
      <PaginationItem>
        
        <PaginationLink
          isActive
          onClick={() => setPage(currentPage)}
          className="cursor-pointer"
        >
            {currentPage}
        </PaginationLink>

      </PaginationItem>
      <PaginationItem>

        <PaginationLink
          onClick={() => setPage(currentPage + 1)}
          className="cursor-pointer"
        >
          {currentPage + 1}
        </PaginationLink>

      </PaginationItem>
      <PaginationItem>

        <PaginationLink
          onClick={() => setPage(currentPage + 2)}
          className="cursor-pointer"
        >
          {currentPage + 2}
        </PaginationLink>

      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>

        <PaginationNext
          onClick={() => setPage((prev: number) => prev + 1)}
          className="cursor-pointer"
        />

      </PaginationItem>
    </PaginationContent>
  </Pagination>
) : (
  <div>Carregando...</div>
))

export default ViewPagination