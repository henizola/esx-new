// MobileNav.tsx
import React from "react";

interface MenuItem {
  name: string;
  href: string;
  current: boolean;
  submenu?: MenuItem[];
  value?: number;
}

const MobileHeader: React.FC<{ navigation: MenuItem[] }> = ({ navigation }) => {
  return (
    <div className='bg-white p-4'>
      <ul>
        {navigation.map((item) => (
          <li key={item.value}>
            <a href={item.href} className='block py-2 text-black'>
              {item.name}
            </a>
            {item.submenu && item.submenu.length > 0 && (
              <ul className='pl-4'>
                {item.submenu.map((subItem) => (
                  <li key={subItem.value}>
                    <a href={subItem.href} className='block py-2  -600'>
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileHeader;
