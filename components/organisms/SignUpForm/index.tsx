import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState({
    male: false,
    female: false,
  });
  const [province, setProvince] = useState("");
  const [dataProvince, setDataProvince] = useState([
    "Jakarta",
    "Kalimanta Barat",
  ]);
  const [city, setCity] = useState("");
  const [dataCity, setDataCity] = useState([""]);

  const router = useRouter();
  const onSubmit = () => {
    const regex = /\S+@\S+\.\S+/;

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      (gender.female === false && gender.male === false) ||
      province === "" ||
      city === ""
    ) {
      toast.error("Form must be filled");
    } else {
      if (regex.test(email)) {
        const userForm = {
          firstName,
          lastName,
          email,
          password,
          gender: gender.male ? "male" : "female",
          province,
          city,
        };
        console.log(userForm);

        router.push("/");
      } else {
        toast.error("Email is not valid");
      }
    }
  };

  const handleGender = (event: any) => {
    if (event.target.value === "male") {
      setGender({ male: true, female: false });
    } else {
      setGender({ male: false, female: true });
    }
  };

  const handleProvince = (item: string) => {
    setProvince(item);
    if (item === "Jakarta") {
      setDataCity([
        "Jakarta Barat",
        "Jakarta Selatan",
        "Jakarta Selatan",
        "Jakarta Timur",
        "Jakarta Utara",
      ]);
    } else {
      setDataCity(["Bengkayang", "Ketapang", "Sambas", "Sintang", "Sukadana	"]);
    }
  };

  const handleCity = (item: string) => {
    setCity(item);
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Registration</h2>
      <p className="text-lg color-palette-1 m-0">Register and join us</p>

      <div className="pt-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          First Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>

      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          last Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Gender
        </label>

        <div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-100 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="male"
              name="male"
              value="male"
              onClick={handleGender}
            />
            <label
              htmlFor="male"
              className="form-check-label inline-block text-gray-800"
            >
              Male
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-100 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="female"
              name="female"
              value="female"
              onClick={handleGender}
            />
            <label
              htmlFor="female"
              className="form-check-label inline-block text-gray-800"
            >
              Female
            </label>
          </div>
        </div>
      </div>

      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Province
        </label>

        <div className="flex justify-center">
          <div>
            <div className="dropdown relative">
              <button
                className="btn rounded-pill border border-gray-100 dropdown-toggle px-6 py-2.5 bg-blue-600 text-black font-medium text-gray-800 rounded hover:bg-blue-700 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {province ? province : "Select your province"}
              </button>
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton1"
              >
                {dataProvince.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <p
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        onClick={() => handleProvince(item)}
                      >
                        {item}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          City
        </label>

        <div className="flex justify-center">
          <div>
            <div className="dropdown relative">
              <button
                className="btn rounded-pill border border-gray-100 dropdown-toggle px-6 py-2.5 bg-blue-600 text-black font-medium text-gray-800 rounded hover:bg-blue-700 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {city ? city : "Select your city"}
              </button>
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton1"
              >
                {dataCity.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <p
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        onClick={() => handleCity(item)}
                      >
                        {item}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
      <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
    </>
  );
}
