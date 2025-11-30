import { Check, Flag } from 'lucide-react';
import { techStack } from '@/constants';
import WindowWrapper from '@/hoc/WindowWrapper';
import { WindowControls } from '@/components';

const Terminal = () => (
  <>
    <div id='window-header'>
      <WindowControls target='terminal' />
      <h2>Tech stack</h2>
    </div>
    <div className='techstack'>
      <p>
        <span className='font-bold'>@catevika %</span> show tech stack
      </p>
      <div className='label'>
        <p className='w-32'>Category</p>
        <p>Technologies</p>
      </div>
      <ul className='content'>
        {techStack.map(({ category, items }) => (
          <li className='flex items-center' key={category}>
            <Check className='check' size={20} />
            <h3>{category}</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  {index < items.length - 1 && ','}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className='footnote'>
        <p>
          <Check size={20} /> 5 of 5 stacks loaded successfully
        </p>
        <p className='text-black'>
          <Flag fill='black' size={15} />
          Render time: 6ms
        </p>
      </div>
    </div>
  </>
);

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
