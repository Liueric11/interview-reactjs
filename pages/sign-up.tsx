import SignUpForm from "../components/organisms/SignUpForm";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <SignUpForm />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
