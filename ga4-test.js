/* GA4 Test Console Script */
/* 
  Paste this in your browser console on your live site to test GA4:
*/

// Check if GA4 is loaded
console.log(
    'GA4 gtag function:',
    typeof gtag !== 'undefined' ? '✅ Loaded' : '❌ Not loaded'
)

// Check if ReactGA is initialized
console.log('Current page:', window.location.pathname)

// Test a manual event
if (typeof gtag !== 'undefined') {
    gtag('event', 'test_event', {
        custom_parameter: 'test_value',
        debug_mode: true,
    })
    console.log('✅ Test event sent to GA4')
} else {
    console.log('❌ Cannot send test event - GA4 not loaded')
}

// Check for GA4 measurement ID in page source
console.log('Looking for GA4 ID in page...')
const scripts = Array.from(document.querySelectorAll('script')).map(
    (s) => s.innerHTML
)
const hasGA4 = scripts.some((script) => script.includes('G-T39HMTQHH2'))
console.log('GA4 Measurement ID found:', hasGA4 ? '✅ Yes' : '❌ No')
