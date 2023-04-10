import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import styled from 'styled-components'

// const useStyles = () => ({})

const Invoice = () => {
  // const classes = useStyles()

  const [formData, setFormData] = useState([
    {
      qty: '',
      price: 0,
      taxper: 0,
      discper: 0,
      tax: 0,
      discount: 0,
      total: 0
    },
  ])

  const handleinputchange = (e, index) => {
    const { name, value } = e.target
    const list = [...formData]
    list[index][name] = value
    setFormData(list)
  }

  const handleremove = (index) => {
    const list = [...formData]
    list.splice(index, 1)
    setFormData(list)
  }

  const handleaddclick = (e) => {
    e.preventDefault()
    setFormData([
      ...formData,
      {
        qty: 0,
        price: 0,
        taxper: 0,
        discper: 0,
        tax: 0,
        discount: 0,
        total: 0
      },
    ])
  }

  const handlecompute = () => {
    const subTotal = formData.reduce((acc, curr) => {
      return acc + Number(curr.price) * Number(curr.qty)
    }, 0)
    return subTotal;
  }

  // console.log(total)
  // console.log(formData)

  //calculate each item's subtotal and tax

  return (
    <div>
      <Form>
        {formData.map((item, index) => (
          <>
            <Container>
              <Row className='mt-2' key={index}>
                <Col>
                 <Form.Group>
                    <Form.Label>Qty</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Qty'
                      name='qty'
                      onChange={(e) => handleinputchange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Cost'
                      name='price'
                      onChange={(e) => handleinputchange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                   <Form.Group>
                    <Form.Label>Tax(%)</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Vat(%)'
                      name='taxper'
                      onChange={(e) => handleinputchange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                 <Form.Group>
                    <Form.Label>Discount(%)</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Discount(%)'
                      name='discper'
                      onChange={(e) => handleinputchange(e, index)}
                    />
                  </Form.Group>
                </Col>
                 <Col>
                  <Form.Group>
                    <Form.Label>Tax</Form.Label>
                    <Form.Control
                      readOnly
                      type='number'
                      placeholder='Tax'
                      name='tax'
                      value={handlecompute() * item.taxper/100}
                      onChange={(e) => handlecompute(e.target.value, index)}
                    />
                  </Form.Group>
                </Col>
                 <Col>
                  <Form.Group>
                    <Form.Label>Discount</Form.Label>
                    <Form.Control
                      readOnly
                      type='number'
                      placeholder='Discount'
                      name='discount'
                      value={handlecompute() * item.discper/100 }
                      onChange={(e) => handlecompute(e.target.value, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Total</Form.Label>
                    <Form.Control
                      readOnly
                      type='number'
                      placeholder='Total'
                      name='total'
                      value={handlecompute() + (handlecompute()*item.taxper/100) - (handlecompute()*item.discper/100)}
                      onChange={(e) => handlecompute(e.target.value, index)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <div>
                    <span>
                      {' '}
                      Actions
                      <div id='dropdown-basic'>
                        {formData.length > 1 && (
                          <button
                            type='button'
                            className='btn btn-light mx-1'
                            onClick={() => handleremove(index)}
                          >
                            Delete Row
                          </button>
                        )}
                      </div>
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col>
                  {formData.length - 1 === index && (
                    <button
                      className='btn btn-success'
                      onClick={handleaddclick}
                    >
                      Add More
                    </button>
                  )}
                </Col>
              </Row>
            </Container>
          </>
        ))}
      </Form>
      </div> )
}
    

     

     export default Invoice;


