const Contact = () => {
  return (
    <div className="bg-gray-200 h-[88vh] w-[100vw]">
      <h1 className="text-center font-bold text-lg py-5">Contact Me!</h1>
      <div className="flex flex-row items-center justify-center ml-[100px]">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-center font-bold text-lg py-5">
            CheckOut My Other Projects on Github:
          </h2>
          <div className="flex flex-col justify-between w-[30%]">
            <a href="https://github.com/shalaka-kapure" target="_blank">
              <div className="flex flex-row justify-center">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  className="h-10 w-10 mr-[20px]"
                />
                <h3 className="w-[150px]">shalaka-kapure</h3>
              </div>
            </a>
          </div>
          <h2 className="text-center font-bold text-lg py-5">
            Connect with Me on LinkedIn:
          </h2>
          <a
            href="https://www.linkedin.com/in/shalaka-kapure-636335230"
            target="_blank"
          >
            <div className="flex flex-col justify-between w-[40%]">
              <div className="flex flex-row justify-center">
                <img
                  src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2017/03/Linkedin-logo.png"
                  className="h-10 w-10 mr-[20px]"
                />
                <h3 className="w-[500px]">Shalaka Kapure</h3>
              </div>
            </div>
          </a>

          <h2 className="text-center font-bold text-lg py-5">
            Connect with Me via Email:
          </h2>
          <div className="flex flex-col justify-between w-[30%]">
            <div className="flex flex-row justify-center">
              <img
                src="https://th.bing.com/th/id/OIP.IpB5yPUkCFHOzlmM-O7ncAHaFW?pid=ImgDet&rs=1"
                alt="Peerlist"
                className="h-8 w-10 ml-[100px] mr-[20px]"
              />{" "}
              <span>shalakakapure@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <img
src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2017/03/Linkedin-logo.png"
className="h-10 w-10"
/> */
}

{
  /* <img
src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
alt="GitHub"
className="h-10 w-10"
/> */
}
