export default function Page({ params }: { params: { id?: number } }) {
  return <div> id 페이지 {params.id}</div>
}
