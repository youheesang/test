import DaumPostcode from 'react-daum-postcode';

const [visible, setVisible] = useState(false); // 우편번호 컴포넌트의 노출여부 상태

const handleComplete = (data) => {
  let fullAddress = data.address;
  let extraAddress = '';

  if (data.addressType === 'R') {
    if (data.bname !== '') {
      extraAddress += data.bname;
    }
    if (data.buildingName !== '') {
      extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
    }
    fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
  }
  setWriteInfo({ ...writeInfo, address: fullAddress })
  setVisible(false)
}

{
  visible &&
  <>
    <button style={closeButton} title="닫기" onClick={() => setVisible(false)} >닫기</button>
    <DaumPostcode
      onComplete={handleComplete}
      style={addressStyle}
      height={700}
    />
  </>
}

<AdressDiv placeholder="주소를 검색해주세요" onClick={() => setVisible(true)} defaultValue={writeInfo.address} />