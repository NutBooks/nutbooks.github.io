import GitHubIcon from '../assets/github-142-svgrepo-com.svg?react';
import LogoLight from '../assets/nutbooks_logo.svg?react';
import LogoDark from '../assets/nutbooks_logo_dark.svg?react';

const Footer = () => {
  return (
    <footer className="mt-8 flex flex-col items-center justify-around p-4 sm:flex-row dark:text-neutral-content">
      <div className="m-1 flex items-center gap-2">
        <LogoLight className="h-6 w-7 dark:hidden" />
        <LogoDark className="hidden h-6 w-7 dark:block" />
        <span className="text-sm">NutBooks &copy; 2024. cheesecat47.</span>
      </div>
      {/* <div>Terms of use</div> */}
      <div className="m-1 flex gap-2">
        <a href="https://github.com/NutBooks">
          <GitHubIcon className="h-6 w-6 fill-black dark:fill-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
