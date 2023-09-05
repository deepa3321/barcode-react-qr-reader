import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import styles from './Barcode.module.css';

const BarcodeScanner = () => {
  const [result, setResult] = useState('No result');

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className={styles.container}>
      <QrReader
        delay={500}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode={'environment'}
      />
      <div className={styles.result}>{result}</div>
    </div>
  );
};

export default BarcodeScanner;
