/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'category',
    label: 'Introduction',
    items: [
      'Introduction/Purpose-of-this-Manual',
      'Introduction/System-Overview',
      'Introduction/System-Benefits',
      'Introduction/Who-Should-Use-This-Manual',
      'Introduction/Prerequisites',
       ],
        },

    {
      type: 'category',
      label: 'How to Access iCare Connect',
      items: [
        'How-to-Access-iCare-Connect/Access-Link',
        'How-to-Access-iCare-Connect/Log-in-Account',
        'How-to-Access-iCare-Connect/First-Time-Log-in', 
      ],
    } ,
    
    {
      type: 'category',
      label: 'My Profile',
      items: [
        'My-Profile/View-Personal-Information',
        'My-Profile/Change-System-Information',
      ],
    },

  
    {
      type: 'category',
      label: 'Working with Modules',
      items: [
        'Working-with-Modules/Client-Registration',
        'Working-with-Modules/Clinic',
        'Working-with-Modules/Nursing',
        
  
      ],
    },

   ],
};

export default sidebars;
