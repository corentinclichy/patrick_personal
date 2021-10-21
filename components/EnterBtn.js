import Link from "next/link";

function EnterBtn() {
  return (
    <div className="enter-btn-container absolute bottom-20">
      <Link href="/home">
        <a className="enter-btn text-white tracking-normal text-lg leading-10 uppercase no-underline mt-20 font-light  ">
          Entrer
        </a>
      </Link>
    </div>
  );
}

export default EnterBtn;
