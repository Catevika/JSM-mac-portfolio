import { Dock, Home, Navbar, Welcome } from "@/components";
import {
  ContactWindow,
  FinderWindow,
  ResumeWindow,
  SafariWindow,
  TerminalWindow,
  TextWindow,
  GalleryWindow,
  ImageVindow,
} from "@/windows";

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
      <TextWindow />
      <ImageVindow />
      <ContactWindow />
      <GalleryWindow />

      <Home />
    </main>
  );
};

export default App;
