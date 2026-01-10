export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1 className="title">Shop Client App</h1>
        <p className="description">
          Next.js 기반 쇼핑 클라이언트 애플리케이션에 오신 것을 환영합니다.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>시작하기</h2>
          <p>Next.js 프로젝트가 성공적으로 설정되었습니다.</p>
        </div>

        <div className="card">
          <h2>기능</h2>
          <p>쇼핑몰 기능을 추가하여 개발을 시작하세요.</p>
        </div>

        <div className="card">
          <h2>개발</h2>
          <p>개발 서버는 <code>npm run dev</code>로 실행할 수 있습니다.</p>
        </div>
      </div>
    </main>
  )
}
