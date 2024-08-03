
export interface Pagination<T> {
  currentPage: number,
  items: number,
  pages: number,
  rows: T
}