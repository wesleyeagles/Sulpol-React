const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});



module.exports = {
  content: ["./src/**/*.{html,js}",
  ],
  
  theme: {

    fontSize: {
      'xs': '.75rem',
      'sm': '1rem',
      'tiny': '0.875rem',
      'base': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.875rem',
      '3xl': '2rem',
      '4xl': '2.875rem',
      'lp': '2.5rem',
      'lp-mobile': '2.2rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    
    extend: {
      backgroundColor: {
        'bg-topbar': '#202124',
      },

      spacing: {
        '50': '3.125rem',
        '70': '4.375rem',
        '100': '6.25rem',
        '120': '7.5rem',
        '130': '8.125rem',
        '140': '8.75rem',
        '200': '12.5rem',
        '300': '18.75rem',
        '400': '25rem',
        '500': '31.25rem',
        '550': '35.25rem',
        '600': '37.5rem',
        '700': '43.75rem',
        '800': '50rem',
        '900': '56.25rem',
        '1000': '62.5rem',
  
      },
  

      

      colors: {
        'text-topbar' : '#A5A5A5',
        'sulpol-green' : '#81D742'
        
      }

      
    },
  },
  plugins: [],
}
