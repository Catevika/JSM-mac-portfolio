import { Dock, Home, Navbar, Welcome } from "@/components";
import {
  ContactWindow,
  FinderWindow,
  ResumeWindow,
  SafariWindow, 
  TerminalWindow,
  TrashWindow,
  TextWindow,
  GalleryWindow,
  ImageWindow,
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
      <ImageWindow />
      <ContactWindow />
      <GalleryWindow />
      <TrashWindow />

      <Home />
    </main>
  );
};

export default App;
