import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import SignInForm from "../components/organisms/SignInForm";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <SignInForm />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
