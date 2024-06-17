const LoginForm = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto my-12 w-5/6 flex-col sm:w-[540px] lg:flex-row-reverse">
          <div className="card bg-base-100 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label"></label>
                <input type="text" placeholder="아이디" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input type="password" placeholder="비밀번호" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">로그인</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
