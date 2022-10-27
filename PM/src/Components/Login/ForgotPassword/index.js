import stylePass from "./style";

const ForgotPassword = () => {
  return (
    <div>
      <section className={stylePass.container}>
        <div className="border-2 rounded-xl py-10 px-5">
          <div className={stylePass.enteremaildiv}>
            <h1 className={stylePass.heading}>Email?</h1>
            <label htmlFor="email" className={stylePass.para}>
              Enter Your Email
            </label>
            <input type="email" required className={stylePass.input} />
          </div>
          <div className={stylePass.buttondiv}>
            <button className={stylePass.button}>Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
