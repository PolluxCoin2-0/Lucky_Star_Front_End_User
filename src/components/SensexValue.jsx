import { useEffect, useRef } from 'react';

function SensexValue() {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any existing script if it exists
    const existingScript = containerRef.current.querySelector('script');
    if (existingScript) {
      containerRef.current.removeChild(existingScript);
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BSE:SENSEX",
      width: "100%",
      locale: "en",
      colorTheme: "light",
      isTransparent: true,
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
    </div>
  );
}

export default SensexValue;
