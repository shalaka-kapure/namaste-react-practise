const Contact = () => {
  return (
    <div className="bg-gray-200 h-[88vh]">
      <h1 className="text-center font-bold text-lg py-5">Contact Me!</h1>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-center w-[50%]">
          <h2 className="text-center font-bold text-lg py-5">
            Check My Other Projects on Github:
          </h2>
          <div className="flex flex-col justify-between w-[5%]">
            <div className="flex flex-row justify-center">
              <a
                href="https://github.com/Anandsg"
                target="_blank"
                title="Anand's Github profile"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  className="h-10 w-10"
                /><span>shalaka-kapure</span>
              </a>
            </div>
          </div>
          <h2 className="text-center font-bold text-lg py-5">
            Connect with Me on LinkedIn:
          </h2>
          <div className="flex flex-col justify-between w-[5%]">
            <div className="flex flex-row justify-center">
              <a
                href="https://peerlist.io/anandsg"
                target="_blank"
                title="Anand's Peerlist profile"
              >
                <img
                  src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2017/03/Linkedin-logo.png"
                  className="h-10 w-10"
                /><span>Shalaka Kapure</span>
              </a>
            </div>
          </div>
          <h2 className="text-center font-bold text-lg py-5">
            Connect with Me via Email:
          </h2>
          <div className="flex flex-col justify-between w-[5%]">
            <div className="flex flex-row justify-center">
                <img
                  src="https://th.bing.com/th/id/OIP.IpB5yPUkCFHOzlmM-O7ncAHaFW?pid=ImgDet&rs=1"
                  alt="Peerlist"
                  className="h-8 w-10 ml-[160px] mr-[20px]"
                /> <span>shalakakapure@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
