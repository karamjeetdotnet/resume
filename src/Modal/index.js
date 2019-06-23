import React from 'react';

const ModalBox = ({ show }) => {
    if (show) {
        return (
            <Modal-Box>
                <div className="modal-open">
                    <div className="modal fade show" data-backdrop="static" data-keyboard="false" tabIndex="-1" style={{paddingRight: "17px", display: "block"}}>
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                            <div class="list-group">
  <a href="mailto:karamjeet2004@yahoo.co.in?Subject=Hello%20!!We%20have%20a%20job%for%you" class="list-group-item list-group-item-action active">
    karamjeet2004@yahoo.co.in
  </a>
  <a href="mailto:karamjeet2004@hotmail.com?Subject=Hello%20!!We%20have%20a%20job%for%you" class="list-group-item list-group-item-action">karamjeet2004@hotmail.com</a>
  <a href="mailto:karamjeetdhooria@gmail.com?Subject=Hello%20!!We%20have%20a%20job%for%you" class="list-group-item list-group-item-action">karamjeetdhooria@gmail.com</a>
</div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </div>

            </Modal-Box>
        )
    } return null;
};

export default ModalBox;