export const form = () => {
  return `
    <form>
      <h3>할일 등록하기</h3>
      <input
        type="text"
        class="title"
        placeholder="제목을 입력하세요"
      />
      <input
        type="text"
        class="description"
        placeholder="내용을 입력하세요"
      />
      <button>등록</button>
    </form>
  `
}