import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName} from '@fortawesome/free-brands-svg-icons'

interface CardWithIconProps {
    url: string;
    icon?: IconName | null;
    name: string;
}

export const CardWithIcon: React.FC<CardWithIconProps> = ({ url, icon=null, name }) => {
  return (
    <a href={url} className='grid grid-cols-3 p-6 max-w-sm mx-auto my-4 bg-white rounded-xl shadow-md space-x-4'>
        { icon ? 
            <>
                <div className='text-3xl col-span-1 mx-auto'>
                    <FontAwesomeIcon icon={['fab', icon]} />
                </div>
                <h2 className='col-span-2 text-3xl font-medium text-black'>{name}</h2>
            </>
        :  <div className='col-span-3 text-center'><h2 className='text-3xl font-medium text-black'>{name}</h2></div>
        }
        
        
    </a>
  );
};
