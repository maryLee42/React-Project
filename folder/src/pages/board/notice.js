
import React, { useState } from 'react';
import DateRangePicker from "react-bootstrap-daterangepicker";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';

import "bootstrap-daterangepicker/daterangepicker.css";
import { ko } from "date-fns/esm/locale";

function Notice() {
    const handleApply = (event, picker) => {
        picker.element.val(
          picker.startDate.format('YYYY-MM-DD') +
            ' ~ ' +
            picker.endDate.format('YYYY-MM-DD')
        );
      };
      const handleCancel = (event, picker) => {
        picker.element.val('');
      };


      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);


      let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
            <Pagination.Item key={number} >
                {number}
            </Pagination.Item>,
        );  
    }

    return (
        <div className='content'>
            <h2 className='title'>공지사항</h2>
            <Card id='card'>
                <Card.Body>     
                    <div className='datePickerWrap'>
                        <span>기간 : </span>
                        <DateRangePicker
                            locale={ko}
                            initialSettings={{
                            autoUpdateInput: false,
                            locale: {
                                cancelLabel: 'Clear',
                            },
                            }}
                            onApply={handleApply}
                            onCancel={handleCancel}
                        >
                        <input type="text" className="form-control col-4" defaultValue="" id="datePicker" placeholder="기간을 선택해주세요"/>
                        </DateRangePicker>
                    </div>               
                    <div className='searchWrap'>
                        <Form.Select className='selectBox'>
                            <option>전체</option>
                            <option>제목</option>
                            <option>작성자</option>
                        </Form.Select>
                        <Form className="searchForm">
                            <Form.Control
                                type="search"
                                placeholder="검색어를 입력해주세요"
                                className="me-2"
                                aria-label="Search"
                                id="searchInput"
                            />
                            <Button className="serchBtn">검색</Button>
                        </Form>                      
                    </div>                         
                </Card.Body>               
            </Card>                
            <div className="listHeader">
                <p>검색결과<span>총<span className="searchNum">27</span>건</span></p>
                <div className='listModify'>
                    <Button id="register">등록</Button>
                    <Button id="del" onClick={handleShow} >삭제</Button>
                </div>
            </div>  
            <Card id="card" className='listWrap'>
                <Card.Body>
                    <Table hover>
                        <thead>
                            <tr>
                                <th className="checkBox"></th>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성일</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>1</td>
                                <td>제목은 링크입니다.</td>
                                <td>yy-mm-dd</td>
                                <td>작성자</td>                             
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>1</td>
                                <td>제목은 링크입니다.</td>
                                <td>yy-mm-dd </td>
                                <td>작성자</td>  
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>1</td>
                                <td>제목은 링크입니다.</td>
                                <td>yy-mm-dd </td>
                                <td>작성자</td>  
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>1</td>
                                <td>제목은 링크입니다.</td>
                                <td>yy-mm-dd</td>
                                <td>작성자</td>  
                            </tr>                           
                        </tbody>
                    </Table>                                          
                    <Pagination id='pagenation'>
                        <Pagination.First />{items}<Pagination.Last />
                    </Pagination>                                      
                </Card.Body> 
            </Card>
            <Modal show={show} onHide={handleClose} className="delPopup">
                <Modal.Header className=""closeButton></Modal.Header>
                <Modal.Body>선택된 글을 삭제하시겠습니까?</Modal.Body>
                <Modal.Footer>
                    <Button className="btnDisable" onClick={handleClose}>취소</Button>
                    <Button onClick={handleClose}>확인</Button>
                </Modal.Footer>
            </Modal>
            </div>
        
    )
}



export default Notice;