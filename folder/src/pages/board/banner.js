// 메리 - banner
import React, {useState} from 'react';
import {Button, Form, Table, Pagination} from 'react-bootstrap'; //bootstrap
import {RiSearch2Line} from 'react-icons/ri'; //react icon 가져오기('/'뒤에 아이콘이름 소문자로 두글자)
import DatePicker from "react-datepicker"; //datepicker 가져오기
import 'react-datepicker/dist/react-datepicker.css'; //datepicker css
import {ko} from 'date-fns/esm/locale'


function Banner() {

    //검색 컴포넌트
    function SearchArea(){
        const [radioState, setRadioState] = useState('전체'); //라디오버튼 '전체'값으로 초기화
        const handleChange = (e) => { //각 Form.Check에 'onChange' prop이 있으므로 값이 변경될 때마다 'handleChange' 함수 실행, 클릭한 라디오버튼의 값으로 상태 업데이트
            setRadioState(e.target.value);
        };
        
        return(
            <div className='bannerWrap pad'>
                <h1 className='mainTitle'>배너관리</h1>
                <Form.Group className='formGroup'>
                    <Form.Label>상태</Form.Label>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`}>
                            <Form.Check 
                                inline 
                                label='전체' 
                                name='group' 
                                value='전체' 
                                type={type} 
                                id={`default-${type}`} 
                                checked={radioState === '전체'}
                                onChange={handleChange} 
                            />
                            <Form.Check
                                inline
                                label='게시중'
                                name='group'
                                value='게시중'
                                type={type}
                                id={`default-${type}`}
                                checked={radioState === '게시중'}
                                onChange={handleChange} 
                            />
                            <Form.Check
                                inline
                                label='숨김'
                                name='group'
                                value='숨김'
                                type={type}
                                id={`default-${type}`}
                                checked={radioState === '숨김'}
                                onChange={handleChange} 
                            />
                        </div>
                    ))}
                </Form.Group>

                <Datepicker/>
                
                <Form.Group className="formGroup" controlId="formBasicEmail">
                    <div className='formInner'>
                        <Form.Label>배너명 검색</Form.Label>
                        <div className='inputWrap'>
                            <Form.Control type="text"/>
                            <Button variant="primary" className='btn'>검색</Button>{' '}
                        </div>
                    </div>
                </Form.Group>
            </div>
        );
    }

    //datepicker 컴포넌트
    function Datepicker(){
        const [startDate, setStartDate] = useState(); //초기 날짜 값 > 현재 날짜 값
        const [endDate, setEndDate] = useState();

        return(
            <Form.Group className='formGroup'>
            <Form.Label>기간</Form.Label>
            <div className='datepickerWrap'>
                <DatePicker
                    className='inputDatepicker' //클래스명으로 css 지정 위해
                    locale={ko} //한국어로 설정
                    dateFormat='yyyy.MM.dd' //MM은 꼭 대문자로
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} //날짜 선택했을 때 실행될 함수
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                />
                <span className='tail'>&#126;</span>
                <DatePicker
                    className='inputDatepicker'
                    locale={ko}
                    dateFormat='yyyy.MM.dd'
                    selected={endDate} 
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
            </div>
        </Form.Group>
        );
    }

    //버튼 컴포넌트
    function ButtonArea(){
        return(
            <div className='btnWrap pad'>
                <Button variant="primary" className='btn'>등록</Button>{' '}
                <Button variant="primary" className='btn'>삭제</Button>{' '}
            </div>
        );
    }

    //테이블 컴포넌트
    function TableArea(){
        const [contents, checked, onClick] = useState();

        useState = { //state값
            allChecked: false,
            checked0: false,
            checked1: false,
            checked2: false,
            checked3: false,
        }

        //전체박스 선택/해제
        const handleAllChecked = () => { //handleAllChecked 이벤트
            const {allChecked} = this.state; //allchecked에 onClick 부여
            this.setState({
                allChecked : !allChecked,
                checked0: !allChecked,
                checked1: !allChecked,
                checked2: !allChecked,
                checked3: !allChecked
            })
        };

        //개별체크 (모든 체크 활성화 > 전체 선택)
        const handleChecked = (index) => {
            console.log(index);
            this.setState({
                [`Checked${index}`]: !this.state[`Checked${index}`]
            }, () => {
                this.setState({
                    allChecked: this.state.Checked0 && this.state.Checked1 && this.state.Checked2 && this.state.Checked3 
                })
            })
        };
 
        //개별 체크박스 컴포넌트
        function CheckBox(){
            return(
                <>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`}>
                            <Form.Check
                                type={type}
                                id={`default-${type}`}
                                name={checked}
                                checked={checked}
                                onClick={onClick}
                            />
                        </div>
                    ))}
                </>
            );
        }

        return(
            <div className='tableWrap pad'>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`}>
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            checked={this.state.allChecked}
                                            onClick={handleAllChecked}
                                        />
                                    </div>
                                ))}
                            </th>
                            <th>번호</th>
                            <th>배너명</th>
                            <th>배너 URL</th>
                            <th>게시기간</th>
                            <th>상태</th>
                            <th>작성일</th>
                            <th>상세</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><CheckBox/></td>
                            <td>4</td>
                            <td>배너4</td>
                            <td>주소주소주소</td>
                            <td>22.01.01~22.05.31</td>
                            <td>게시중</td>
                            <td>21.05.24</td>
                            <td><RiSearch2Line/></td>
                        </tr>
                        <tr>
                            <td>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`}>
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                        />
                                    </div>
                                ))}
                            </td>
                            <td>3</td>
                            <td>배너3</td>
                            <td>주소주소주소</td>
                            <td>22.01.01~22.05.31</td>
                            <td>게시중</td>
                            <td>21.05.24</td>
                            <td>
                                <RiSearch2Line></RiSearch2Line>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`}>
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                        />
                                    </div>
                                ))}
                            </td>
                            <td>2</td>
                            <td>배너2</td>
                            <td>주소주소주소</td>
                            <td>22.01.01~22.05.31</td>
                            <td>게시중</td>
                            <td>21.05.24</td>
                            <td>
                                <RiSearch2Line></RiSearch2Line>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`}>
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                        />
                                    </div>
                                ))}
                            </td>
                            <td>1</td>
                            <td>배너1</td>
                            <td>주소주소주소</td>
                            <td>22.01.01~22.05.31</td>
                            <td>게시중</td>
                            <td>21.05.24</td>
                            <td>
                                <RiSearch2Line></RiSearch2Line>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }

    //paging 컴포넌트
    function Paging(){
        return(
            <Pagination className='pagingWrap'>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        );
    }

    return(
        <div>
            <SearchArea/>
            <ButtonArea/>
            <TableArea/>
            <Paging/>
        </div>
    );
    
}

export default Banner;