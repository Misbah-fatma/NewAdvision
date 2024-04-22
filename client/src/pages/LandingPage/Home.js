import React from 'react-redux'
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import animationData from "./Animation - 1712728546298.json";
import animate2 from  "./Animation - 1712730189303.json"
import Lottie from "lottie-react";
import { useNavigate  } from 'react-router-dom';


const Home = () => {

    const history = useNavigate ();  
  return (
    <div >
     <ChakraProvider>
        <div  style={{backgroundColor : " #2b6cb0 "}}>
        <Container
        maxW={"container.xl"}
        minH={"95vh"}
        display={"flex"}
        flexDirection={["column", "column", "row", "row"]}
      
      >
        <Box
          borderRight={["none", "none", "none", "2px solid #2b6cb0"]}
          h={"full"}
          w={"full"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={["center", "self-start"]}
          justifyContent={"center"}
          px={[10, 10, 10, 0]}
        >
          <Box py={10} w={"full"} >
            <Heading  style={{ color: "white", fontSize : 45}} letterSpacing={"4px"}>
            Enhance your <span className="text-glow">JOURNEY</span>
            </Heading>
            <Heading style={{ color: "white",  fontSize : 60}} letterSpacing={"4px"} mt={4}>
            OF LEARNING.
            </Heading>
          </Box>

           
          <Stack w={"100%"} alignItems={"self-start"}>
            <img
              src="https://s3.amazonaws.com/cdn.codeblu.io/website/Landing_Img/lineimg.png"
              width={"60%"}
            />
           
          </Stack>

          <Text
            fontWeight={"bold"}
            fontSize={"1.5rem"}
            letterSpacing={"1px"}
            py={14}
            style={{ color: "white" }}
          >
            
Utilize an all-in-one learning management tool to upskill, engage, and develop your team effectively.
          </Text>

          <Lottie
              animationData={animate2}
              style={{ height: "200px", width: "100%", transform: "scale(1.5)" }}
            />
        </Box>
        <Box
          py={10}
          h={"full"}
          w={"full"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Heading style={{ color: "white" }} textAlign={"center"}>Enroll now, start learning IMMEDIATELY.</Heading>
          <Box h={["200px", "300px"]} w={["200px", "300px"]}>
            <Lottie
              animationData={animationData}
              style={{ height: "100%", width: "100%", transform: "scale(1.5)" }}
            />
          </Box>

          <Text w={"80%"} fontSize={"14"} textAlign={"justify"} style={{ color: "white", fontWeight : 200 }}>
            
We're dedicated to empowering your learning journey, 
whether you seek skill enhancement, 
new explorations, or career advancement.
Unlock your potential with our tailored courses designed to meet your unique learning goals.
          </Text>

   
          <Button onClick={()=>{
            history("/Courses1")
          }} colorScheme="blue" width={"50%"} mt={12}>
            Get Started
          </Button>
    
        </Box>
      </Container>
      </div>
      </ChakraProvider>
       
        <div className="key-feature container-fluid">
           <div className="container">
              <div className="session-title row">
                  <h2>Key Feat Features</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
              </div>
               <div className="row">
                   <div className="col-md-3 key-div">
                       <div className="key-cover">
                           <i className="far fa-file-word"></i>
                           <h4>Programing Experts</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit  </p>
                       </div>
                   </div>
                   <div className="col-md-3 key-div">
                       <div className="key-cover">
                           <i className="far fa-clock"></i>
                           <h4>Timely Delivery</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit  </p>
                       </div>
                   </div>
                   <div className="col-md-3 key-div">
                       <div className="key-cover">
                           <i className="fas fa-object-group"></i>
                           <h4>Quality Design</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit  </p>
                       </div>
                   </div>
                   <div className="col-md-3 key-div">
                       <div className="key-cover">
                           <i className="fas fa-phone-volume"></i>
                           <h4>24 x 7 Suport</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit  </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>


        <div className="testimonial-container contaienr-fluid">
            <div className="container">
                <div className="session-title row">
                  <h2>What People Say about Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
                </div>
                <div className="test-row row">
                    <div className="col-md-6">
                        <div className="test-card">
                            <div className="image">
                                <img src="assets/images/testimonial/member-01.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Krisinan Kumar</h3>
                                <p>Vestibulum consequat ligula sit amet ligula mollis consequat  In consequat tincidunt risus. pellentesque pulvinar. Suspendisse congue a diam in volutpat. Nullam maximus, lectus </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="test-card">
                            <div className="image">
                                <img src="assets/images/testimonial/member-02.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Steve Smith</h3>
                                <p>Vestibulum consequat ligula sit amet ligula mollis consequat  In consequat tincidunt risus. pellentesque pulvinar. Suspendisse congue a diam in volutpat. Nullam maximus, lectus </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="test-card">
                            <div className="image">
                                <img src="assets/images/testimonial/member-03.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Adel Reshide</h3>
                                <p>Vestibulum consequat ligula sit amet ligula mollis consequat  In consequat tincidunt risus. pellentesque pulvinar. Suspendisse congue a diam in volutpat. Nullam maximus, lectus </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="test-card">
                            <div className="image">
                                <img src="assets/images/testimonial/member-04.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Jonney Smith</h3>
                                <p>Vestibulum consequat ligula sit amet ligula mollis consequat  In consequat tincidunt risus. pellentesque pulvinar. Suspendisse congue a diam in volutpat. Nullam maximus, lectus </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


   

         <div id="about" className="about-company">
          <div className="container">
              <div className="row">
                 <div className="col-md-6">
                   <div className="detail">
                       <h3>About Company</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit mi, sed convallis nisi eleifend eget. Morbi vel magna odio. Lorem ipsum dolor consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est  consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est ipsum dolor sit arcu.</p>
                       <p>Ut ullamcorper ac eros nec molestie. Curabitur luctus dui fringilla magna laoreet lacinia. Pellentesque velit ante, convallis quis justo vel, condimentum tempus diam. Donec vitae pretium lectus. Nullam faucibus nulla sit amet tincidunt gravida. Maecenas posuere pharetra tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent molestie lectus in arcu pharetra pulvinar. Donec cursus diam id quam accumsan maximus. Morbi ac tincidunt quam, quis cursus urna. Pellentesque in consectetur ante, a efficitur nisi.</p>
                   </div>
               </div>
               <div className="col-md-6">
                   <div className="imag">
                       <img src="assets/images/about.jpg" alt=""/>
                   </div>
               </div> 
              </div>
          </div>
           
       </div>


        <div className="blog-container contaienr-fluid">
            <div className="container">
                <div className="session-title row">
                  <h2>What People Say about Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
                </div>
                <div className="row news-row">
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_01.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Latest News about Smarteye</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_02.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Apple Launch its New Phone</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_03.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>About Windows 10 Update</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_04.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Latest News about Smarteye</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


 
       <div id="why" className="our-capablit container-fluid" style={{backgroundColor : "#2b6cb0"}}>
           <div className="layy">
               <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                       <div className="cap-det">
                        
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">80<sup className="small">%</sup></div>
                              </div>
                            </div>
                          
                           <h6>Web Design</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. </p>
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div className="cap-det">
                    
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">70<sup className="small">%</sup></div>
                              </div>
                            </div>
                    
                           <h6>Android Development</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. </p>
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div className="cap-det">
                      
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">90<sup className="small">%</sup></div>
                              </div>
                            </div>
                   
                           <h6>Frontend Developer</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                       </div>
                   </div>
                   
                   <div className="col-md-3">
                       <div className="cap-det">
                       
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">60<sup className="small">%</sup></div>
                              </div>
                            </div>
                       
                           <h6>SEO & Digital Marketing</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                       </div>
                   </div>
                  </div>
               </div>
           </div>
       </div>



    <section className="our-team team-11">
        <div className="container">
            <div className="session-title row">
                  <h2>Take a look at Our Team</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
            </div>
            <div className="row team-row">
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb1.jpg" alt=""/>
                        <div className="det-o"style={{backgroundColor : "#2b6cb0"}}>
                            <h4>David Kanuel</h4>
                            <i>CEO</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb2.jpg" alt=""/>
                        <div className="det-o" style={{backgroundColor : "#2b6cb0"}}>
                            <h4>David Kanuel</h4>
                            <i>Business Analsist</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb3.jpg" alt=""/>
                        <div className="det-o" style={{backgroundColor : "#2b6cb0"}}>
                            <h4>David Kanuel</h4>
                            <i>Project Manager</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb4.jpg" alt=""/>
                        <div className="det-o" style={{backgroundColor : "#2b6cb0"}}>
                            <h4>David Kanuel</h4>
                            <i>Team Leader</i>
                        </div>
                    </div>
                </div>
                
                 
            </div>
        </div>


    </section>


  
    <div className="services container-fluid">
       <div className="container">
           <div className="session-title row">
                  <h2>Our Services</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
            </div>
            <div className="service-row row">
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="far fa-lightbulb"></i> UI Designing</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fab fa-android"></i> Android Development</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-fill-drip"></i> Graphic Design</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-ad"></i> Website Design</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-seedling"></i> SEO</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-at"></i> Digital Marketing</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="far fa-address-card"></i> ERP  Applications</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fab fa-app-store"></i> App Development</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
            </div>
       </div>
        
    </div>


   
    
     <section id="price" className="price-tab container-fluid">
        <div className="container">
           <div className="session-title row">
                 <h2>Our Pricing</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit mi, sed convallis nisi eleifend eget.</p>
           </div>
            <div className="row">
               
                <div className="col-md-4">
                    <div className="product-box">
                        <div className="product-popular" style={{backgroundColor : "#2b6cb0"}}>
                            Most Popular
                        </div>
                        <div className="product-price">
                            <div className="rokij"> $189 <p className="term"> / month</p></div>
                            
                        </div>
                        <div className="product-features">
                            
                            <ul className="smal">
                               
                                <li>
                                    Powered by cPanel®
                                </li>
                                <li>
                                    Dedicated IP Address
                                </li>
                                <li>
                                    99.95% Uptime SLA
                                </li>
                                <li>
                                    1000 Mbit Uplink
                                </li>
                                <li>
                                    <strong>10</strong> Hosted Domains
                                </li>
                                <li>
                                    <strong>25 GB</strong> RAID 10 Storage
                                </li>
                                <li>
                                    <strong>200 GB</strong> Premium Bandwidth
                                </li>
                            </ul>
                        </div>
                        <div className="product-order">
                            <a className="btn btn-success" href="products-cloud-hosting.html#cloud-starter-monthly"style={{backgroundColor : "#2b6cb0"}}>
                                <i className="fas fa-shopping-cart icon-left"></i>Order Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-box ultimate">
                        <div className="product-popular ppo">
                            Most Popular
                        </div>
                        
                        <div className="product-price">
                            <div className="rokij">$389 <p className="term"> / month</p></div>
                            
                        </div>
                        <div className="product-features">
                           
                            <ul className="smal">
                                <li>
                                    Powered by cPanel®
                                </li>
                                <li>
                                    Dedicated IP Address
                                </li>
                                <li>
                                    99.95% Uptime SLA
                                </li>
                                <li>
                                    1000 Mbit Uplink
                                </li>
                                <li>
                                    <strong>10</strong> Hosted Domains
                                </li>
                                <li>
                                    <strong>25 GB</strong> RAID 10 Storage
                                </li>
                                <li>
                                    <strong>200 GB</strong> Premium Bandwidth
                                </li>
                                <li>
                                    Unlimied Emaills
                                </li>
                                <li>
                                   Premium Support
                                </li>
                                <li>
                                    Daily Backup
                                </li>
                            </ul>
                        </div>
                        <div className="product-order" >
                            <a className="btn btn-success" href="products-cloud-hosting.html#cloud-starter-monthly" style={{backgroundColor : "#2b6cb0"}}>
                                <i className="fas fa-shopping-cart icon-left" ></i>Order Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-box">
                        <div className="product-popular" style={{backgroundColor : "#2b6cb0"}}>
                            Most Popular
                        </div>
                        <div className="product-price">
                            <div className="rokij">$689<p className="term"> / month</p></div>
                        </div>
                        <div className="product-features">
                            
                            <ul className="smal">
                                <li>
                                    Powered by cPanel®
                                </li>
                                <li>
                                    Dedicated IP Address
                                </li>
                                <li>
                                    99.95% Uptime SLA
                                </li>
                                <li>
                                    1000 Mbit Uplink
                                </li>
                                 <li>
                                    <strong>10</strong> Hosted Domains
                                </li>
                                <li>
                                    <strong>25 GB</strong> RAID 10 Storage
                                </li>
                                <li>
                                    <strong>200 GB</strong> Premium Bandwidth
                                </li>
                            </ul>
                        </div>
                        <div className="product-order">
                            <a className="btn btn-success" href="products-cloud-hosting.html#cloud-starter-monthly" style={{backgroundColor : "#2b6cb0"}}>
                                <i className="fas fa-shopping-cart icon-left"></i>Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    


    <footer id="contact" style={{backgroundColor : "#2b6cb0"}}>
    <div className="container" >
        <div className="row">
            <div className="col-md-3 about">
                <h2>About Us</h2>
                <p>Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non scelerisque augue. Proin et sollicitudin velit. </p>
                
                <div className="foot-address">
                    <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="addet">
                        BlueDart
                        Marthandam (K.K District)
                        Tamil Nadu, IND 
                    </div>
                </div>
                <div className="foot-address">
                    <div className="icon">
                        <i className="far fa-envelope-open"></i>
                    </div>
                    <div className="addet">
                        info@smarteyeapps.com <br/>
                        sales@smarteyeapps.com
                    </div>
                </div>
                <div className="foot-address">
                    <div className="icon">
                         <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="addet">
                        +23 323 43434 <br />
                        +1 3232 434 55
                    </div>
                </div>
            </div>
            <div className="col-md-3 fotblog">
                <h2>From latest Blog</h2>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
            </div>
            <div className="col-md-3 glink">
                <ul>
                    <li><a href="index.html"><i className="fas fa-angle-double-right"></i>Home</a></li>
                    <li><a href="about_us.html"><i className="fas fa-angle-double-right"></i>About Us</a></li>
                    <li><a href="services.html"><i className="fas fa-angle-double-right"></i>Services</a></li>
                    <li><a href="blog.html"><i className="fas fa-angle-double-right"></i>Blog</a></li>
                    <li><a href="pricing.html"><i className="fas fa-angle-double-right"></i>Gallery</a></li>
                    <li><a href="contact_us.html"><i className="fas fa-angle-double-right"></i>Contact Us</a></li>
                </ul>
            </div>
            <div className="col-md-3 tags">
                <h2>Easy Tags</h2>
                <ul>
                    <li>Finance</li>
                    <li>Web Design</li>
                    <li>Internet Pro</li>
                    <li>Node Js</li>
                    <li>Java Swing</li>
                    <li>Angular Js</li>
                    <li>Vue Js</li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<div className="copy" style={{backgroundColor : "#2b6cb0"}}>
            <div className="container">
                <a href="https://www.smarteyeapps.com/">2015 &copy; All Rights Reserved | Designed and Developed by Misbah Fatma</a>
                
                <span>
                <a><i className="fab fa-github"></i></a>
                <a><i className="fab fa-google-plus-g"></i></a>
                <a><i className="fab fa-pinterest-p"></i></a>
                <a><i className="fab fa-twitter"></i></a>
                <a><i className="fab fa-facebook-f"></i></a>
        </span>
            </div>

        </div>
    </div>
  )
}

export default Home
