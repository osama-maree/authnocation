
function PWDRequisite(props) {
  return (
    <div> 
      {/* Check Valid Password */}
       <p className={props.capsLetterFlag}>Must contain 1 Capital</p>
       <p className={props.numberFlag}>Must contain number</p>
       <p className={props.pwdLengthCheck}>must be 8 chars long</p>
       <p className={props.specialCharFlag}>must contain 1 special charachter</p>
       
    </div>
  )
}

export default PWDRequisite