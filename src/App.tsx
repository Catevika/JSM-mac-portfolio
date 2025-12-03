import { Dock, Navbar, Welcome } from "@/components";
import {
  ContactWindow,
  FinderWindow,
  ResumeWindow,
  SafariWindow,
  TerminalWindow,
  TextWindow,
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
    </main>
  );
};

export default App;
