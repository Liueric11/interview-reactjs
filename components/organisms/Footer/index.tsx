import Image from "next/image";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a className="mb-30" href="/#">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2022. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
