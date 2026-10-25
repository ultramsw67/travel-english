// 수드 여행 영어 안내문 읽기 — 보통 수준(CEFR B1) 여행 안내문 24편, 글·번역 수트와후드 (CC BY-SA 4.0)
window.READINGS = [
{id:"r01", cat:"공항", title:"Welcome to Riverside International Airport", ko:"리버사이드 국제공항 도착 안내",
 sents:[
  ["Welcome to Riverside International Airport.","리버사이드 국제공항에 오신 것을 환영해요."],
  ["Please follow the yellow Arrivals signs to passport control on the first floor.","노란색 '도착' 표지판을 따라 1층 입국 심사대로 가세요."],
  ["Have your passport and arrival card ready before you reach the officer.","심사관 앞에 가기 전에 여권과 입국 신고서를 준비해 두세요."],
  ["Visitors from some countries must also show a return ticket or hotel booking.","일부 국가에서 온 방문객은 돌아가는 항공권이나 호텔 예약도 보여 줘야 해요."],
  ["After passport control, go down the escalator to the baggage claim area.","입국 심사를 마치면 에스컬레이터를 타고 내려가 수하물 찾는 곳으로 가세요."],
  ["Check the screens to find the belt number for your flight.","화면을 보고 내 항공편의 수하물 벨트 번호를 확인하세요."],
  ["If your bag does not arrive, report it at the Lost Baggage desk next to Belt 6.","가방이 나오지 않으면 6번 벨트 옆 수하물 분실 창구에 신고하세요."],
  ["Items such as fresh fruit, meat, and plants must be declared at customs.","생과일, 고기, 식물 같은 물품은 세관에 신고해야 해요."],
  ["If you have nothing to declare, take the green exit.","신고할 물건이 없으면 초록색 출구로 나가세요."],
  ["Free Wi-Fi is available throughout the terminal for two hours.","터미널 어디서나 무료 와이파이를 2시간 동안 쓸 수 있어요."],
  ["Taxis, buses, and the airport train can be found outside Exit B.","택시, 버스, 공항철도는 B 출구 밖에서 탈 수 있어요."]
 ],
 vocab:[["passport control","입국 심사대"],["arrival card","입국 신고서"],["baggage claim","수하물 찾는 곳"],["belt","(수하물) 벨트"],["declare","(세관에) 신고하다"],["customs","세관"],["terminal","터미널, 공항 건물"]],
 qs:[
  {q:"가방이 나오지 않으면 어디로 가야 하나요?", c:["B 출구 바깥","6번 벨트 옆 수하물 분실 창구","1층 입국 심사대","세관 초록색 출구"], a:1, s:6},
  {q:"세관에 신고할 물건이 없으면 어떻게 하나요?", c:["빨간색 출구로 나간다","심사관에게 입국 신고서를 낸다","초록색 출구로 나간다","6번 벨트로 간다"], a:2, s:8},
  {q:"무료 와이파이는 얼마 동안 쓸 수 있나요?", c:["2시간","1시간","30분","시간 제한 없음"], a:0, s:9},
  {q:"일부 국가에서 온 방문객이 추가로 보여 줘야 하는 것은 무엇인가요?", c:["신용카드","여행자 보험 증서","예방 접종 증명서","돌아가는 항공권이나 호텔 예약"], a:3, s:3}
 ]},

{id:"r02", cat:"보안검색", title:"Before You Board: Security and Boarding", ko:"탑승 전 보안 검색·탑승 안내",
 sents:[
  ["All passengers must pass through security screening before entering the gate area.","모든 승객은 탑승구 구역에 들어가기 전에 보안 검색을 받아야 해요."],
  ["Please arrive at security at least 90 minutes before an international flight.","국제선은 출발 최소 90분 전까지 보안 검색대에 도착하세요."],
  ["Liquids in your carry-on bag must be in containers of 100 ml or less.","기내 가방 속 액체는 100ml 이하 용기에 담아야 해요."],
  ["Place all containers in one clear plastic bag and show it separately.","용기는 모두 투명 비닐봉지 하나에 넣고 따로 꺼내 보여 주세요."],
  ["Remove laptops and large electronic devices from your bag.","노트북과 큰 전자 기기는 가방에서 꺼내 주세요."],
  ["You do not need to remove your shoes unless an officer asks you to.","직원이 요청하지 않으면 신발은 벗지 않아도 돼요."],
  ["Sharp objects, such as knives and scissors, are not allowed in the cabin.","칼이나 가위 같은 날카로운 물건은 기내에 가지고 탈 수 없어요."],
  ["Boarding usually begins 40 minutes before departure, and the gate closes 15 minutes before departure.","탑승은 보통 출발 40분 전에 시작하고, 탑승구는 출발 15분 전에 닫혀요."],
  ["Passengers who arrive after the gate closes will not be allowed to board.","탑승구가 닫힌 뒤에 도착한 승객은 탑승할 수 없어요."],
  ["Gate numbers can change, so please check the departure screens often.","탑승구 번호가 바뀔 수 있으니 출발 안내 화면을 자주 확인하세요."]
 ],
 vocab:[["security screening","보안 검색"],["carry-on","기내 반입(가방)"],["container","용기"],["separately","따로"],["electronic devices","전자 기기"],["cabin","기내, 객실"],["boarding","탑승"],["departure","출발"]],
 qs:[
  {q:"국제선을 탈 때는 보안 검색대에 언제까지 도착해야 하나요?", c:["출발 15분 전","출발 40분 전","출발 90분 전","출발 2시간 전"], a:2, s:1},
  {q:"신발에 대한 안내로 맞는 것은 무엇인가요?", c:["항상 벗어야 한다","직원이 요청할 때만 벗는다","비닐봉지에 넣어야 한다","기내에서 갈아 신어야 한다"], a:1, s:5},
  {q:"탑승구는 언제 닫히나요?", c:["출발 15분 전","출발 40분 전","출발 90분 전","출발 시각"], a:0, s:7},
  {q:"기내에 가지고 탈 수 없는 것은 무엇인가요?", c:["노트북","100ml 이하 용기에 담은 액체","투명 비닐봉지","가위"], a:3, s:6}
 ]},

{id:"r03", cat:"기내", title:"Welcome on Board Flight 208", ko:"기내 안내 방송",
 sents:[
  ["Welcome on board Sky Coast Airlines Flight 208 to Port Elena.","포트 엘레나행 스카이코스트 항공 208편에 탑승하신 것을 환영해요."],
  ["Our flight time today is about seven hours and twenty minutes.","오늘 비행 시간은 약 7시간 20분이에요."],
  ["Please make sure your seat belt is fastened whenever you are seated.","자리에 앉아 있을 때는 늘 안전벨트를 매 주세요."],
  ["Small bags should be placed under the seat in front of you.","작은 가방은 앞 좌석 아래에 두세요."],
  ["Larger items can go in the overhead bins.","큰 짐은 머리 위 짐칸에 넣으면 돼요."],
  ["Smoking, including electronic cigarettes, is not allowed at any time during the flight.","비행 중에는 전자담배를 포함해 언제든 흡연할 수 없어요."],
  ["Meals and drinks will be served about one hour after take-off.","식사와 음료는 이륙하고 약 1시간 뒤에 나와요."],
  ["If you need a special meal, please speak to a flight attendant.","특별식이 필요하면 승무원에게 말씀하세요."],
  ["Before landing, all passengers must return their seats to the upright position.","착륙 전에는 모든 승객이 등받이를 똑바로 세워야 해요."],
  ["Arrival cards for Port Elena will be handed out during the flight.","포트 엘레나 입국 신고서는 비행 중에 나눠 드려요."],
  ["Thank you for flying with us, and enjoy your trip.","저희 항공편을 이용해 주셔서 감사해요. 즐거운 여행 되세요."]
 ],
 vocab:[["on board","탑승한, 기내에"],["fastened","(벨트를) 맨"],["overhead bins","머리 위 짐칸"],["take-off","이륙"],["flight attendant","승무원"],["landing","착륙"],["upright","똑바로 선"],["handed out","나눠 준"]],
 qs:[
  {q:"오늘 비행 시간은 얼마나 되나요?", c:["약 1시간","약 7시간 20분","약 2시간 8분","약 12시간"], a:1, s:1},
  {q:"식사는 언제 나오나요?", c:["착륙 1시간 전","탑승하자마자","비행 중간쯤","이륙하고 약 1시간 뒤"], a:3, s:6},
  {q:"특별식이 필요하면 어떻게 하나요?", c:["승무원에게 말한다","좌석 버튼을 누른다","입국 신고서에 적는다","착륙 뒤에 요청한다"], a:0, s:7},
  {q:"작은 가방은 어디에 두라고 하나요?", c:["머리 위 짐칸","통로 옆","앞 좌석 아래","무릎 위"], a:2, s:3}
 ]},

{id:"r04", cat:"호텔객실", title:"Harbor View Hotel: Your Room Guide", ko:"하버뷰 호텔 객실 안내",
 sents:[
  ["Thank you for choosing the Harbor View Hotel.","하버뷰 호텔을 선택해 주셔서 감사해요."],
  ["Your room key card also controls the lights, so please place it in the slot by the door.","객실 카드 키로 조명도 켜지니, 문 옆 카드 꽂이에 꽂아 주세요."],
  ["The safe is inside the closet, and you can set your own four-digit code.","금고는 옷장 안에 있고, 네 자리 비밀번호를 직접 정할 수 있어요."],
  ["Drinks and snacks in the mini-bar will be charged to your room.","미니바의 음료와 간식은 객실 요금에 더해져요."],
  ["Bottled water on the desk is free of charge.","책상 위 생수는 무료예요."],
  ["If you would like your room cleaned, hang the green card on the door before 11 a.m.","방 청소를 원하면 오전 11시 전에 초록색 카드를 문에 걸어 두세요."],
  ["To save water, towels on the floor will be replaced, but towels on the rack will be reused.","물을 아끼기 위해 바닥에 둔 수건은 바꿔 드리고, 걸이에 건 수건은 다시 써요."],
  ["Smoking is not allowed in any room, and a cleaning fee of $250 will be charged.","모든 객실은 금연이며, 흡연하면 청소비 250달러가 부과돼요."],
  ["For room service, dial 7 from your room phone.","룸서비스는 객실 전화로 7번을 누르세요."],
  ["Dial 0 for the front desk at any time.","프런트는 언제든 0번을 누르면 돼요."]
 ],
 vocab:[["key card","카드 키"],["slot","꽂는 곳, 투입구"],["safe","금고"],["mini-bar","미니바"],["free of charge","무료로"],["rack","걸이, 선반"],["reused","다시 사용되는"],["room service","룸서비스"]],
 qs:[
  {q:"방 청소를 원하면 어떻게 하나요?", c:["프런트에 0번으로 전화한다","오전 11시 전에 초록색 카드를 문에 건다","수건을 바닥에 둔다","7번을 누른다"], a:1, s:5},
  {q:"무료로 이용할 수 있는 것은 무엇인가요?", c:["미니바 음료","미니바 간식","책상 위 생수","룸서비스"], a:2, s:4},
  {q:"객실에서 담배를 피우면 어떻게 되나요?", c:["경고만 받는다","100달러를 낸다","바로 방을 비워야 한다","청소비 250달러가 부과된다"], a:3, s:7},
  {q:"룸서비스를 부르려면 몇 번을 누르나요?", c:["7번","0번","4번","11번"], a:0, s:8}
 ]},

{id:"r05", cat:"호텔시설", title:"Guest Facilities: Breakfast, Pool and Gym", ko:"호텔 조식·부대시설 안내",
 sents:[
  ["Breakfast is served in the Garden Restaurant on the second floor.","조식은 2층 가든 레스토랑에서 제공해요."],
  ["It is open from 6:30 to 10:00 a.m. on weekdays and until 10:30 a.m. on weekends.","평일에는 오전 6시 30분부터 10시까지, 주말에는 오전 10시 30분까지 열어요."],
  ["Breakfast is included for guests who booked a room with breakfast.","조식 포함으로 객실을 예약한 손님은 조식이 포함돼 있어요."],
  ["Other guests can pay $18 per adult, and children under six eat for free.","다른 손님은 어른 1인당 18달러를 내면 되고, 6세 미만 어린이는 무료예요."],
  ["The swimming pool on the roof is open daily from 7 a.m. to 9 p.m.","옥상 수영장은 매일 오전 7시부터 오후 9시까지 열어요."],
  ["Children under 12 must be with an adult in the pool area.","12세 미만 어린이는 수영장에서 어른과 함께 있어야 해요."],
  ["The fitness center on the third floor is open 24 hours a day.","3층 피트니스 센터는 24시간 열어요."],
  ["Please use your room key card to enter.","들어갈 때는 객실 카드 키를 쓰세요."],
  ["Pool towels are available at the pool entrance.","수영장 수건은 수영장 입구에 있어요."],
  ["Taking food from the breakfast room is not allowed.","조식당 음식을 밖으로 가져갈 수 없어요."]
 ],
 vocab:[["included","포함된"],["booked","예약한"],["per adult","어른 1인당"],["roof","옥상, 지붕"],["daily","매일"],["fitness center","피트니스 센터, 헬스장"],["entrance","입구"],["available","이용할 수 있는"]],
 qs:[
  {q:"주말에는 조식이 몇 시에 끝나나요?", c:["오전 6시 30분","오전 10시","오전 10시 30분","오전 9시"], a:2, s:1},
  {q:"조식이 포함되지 않은 어른 손님은 얼마를 내나요?", c:["18달러","6달러","12달러","무료"], a:0, s:3},
  {q:"피트니스 센터에 대한 설명으로 맞는 것은 무엇인가요?", c:["옥상에 있다","오전 7시부터 오후 9시까지 연다","24시간 연다","2층에 있다"], a:2, s:6},
  {q:"12세 미만 어린이가 수영장을 이용할 때 지켜야 할 것은 무엇인가요?", c:["들어갈 수 없다","수건을 따로 사야 한다","오전에만 들어갈 수 있다","어른과 함께 있어야 한다"], a:3, s:5}
 ]},

{id:"r06", cat:"지하철", title:"How to Use the City Metro", ko:"지하철 이용 안내",
 sents:[
  ["The City Metro has five lines, and each line has its own color.","시티 메트로에는 노선이 다섯 개 있고, 노선마다 색이 달라요."],
  ["Trains run every five to eight minutes from 5:30 a.m. until midnight.","열차는 오전 5시 30분부터 자정까지 5~8분마다 다녀요."],
  ["You can buy single tickets from machines in every station.","1회권은 모든 역의 발매기에서 살 수 있어요."],
  ["A single ticket costs $2.50 and is valid for 90 minutes.","1회권은 2.50달러이고 90분 동안 쓸 수 있어요."],
  ["You may change lines as many times as you like within that time.","그 시간 안에는 노선을 몇 번이든 갈아탈 수 있어요."],
  ["Keep your ticket until you leave the station, because you need it at the exit gate.","나가는 개찰구에서 표가 필요하니 역을 나갈 때까지 표를 가지고 계세요."],
  ["Eating and drinking are not allowed on trains or platforms.","열차 안과 승강장에서는 먹거나 마실 수 없어요."],
  ["Please let passengers get off before you get on.","타기 전에 내리는 승객이 먼저 내리게 해 주세요."],
  ["Priority seats are for older people, pregnant women, and passengers with disabilities.","배려석은 노인, 임신부, 장애가 있는 승객을 위한 자리예요."],
  ["To reach the airport, take Line 2 to the last stop.","공항에 가려면 2호선을 타고 종점까지 가세요."]
 ],
 vocab:[["single ticket","1회권"],["valid","유효한"],["change lines","노선을 갈아타다"],["exit gate","나가는 개찰구"],["platforms","승강장"],["priority seats","배려석, 우선석"],["pregnant","임신한"],["disabilities","장애"]],
 qs:[
  {q:"1회권은 얼마 동안 쓸 수 있나요?", c:["30분","60분","90분","하루"], a:2, s:3},
  {q:"공항에 가려면 어떻게 하나요?", c:["1호선 종점까지 간다","2호선을 타고 종점까지 간다","5호선으로 갈아탄다","버스로 갈아탄다"], a:1, s:9},
  {q:"역을 나갈 때까지 표를 가지고 있어야 하는 이유는 무엇인가요?", c:["나가는 개찰구에서 필요해서","환불받으려고","다음 날 다시 쓰려고","좌석을 확인하려고"], a:0, s:5},
  {q:"열차 운행 시간은 언제인가요?", c:["오전 5시부터 오후 11시까지","오전 6시부터 자정까지","24시간","오전 5시 30분부터 자정까지"], a:3, s:1}
 ]},

{id:"r07", cat:"기차", title:"Coastal Rail: Ticket and Seat Rules", ko:"코스털 레일 기차표·좌석 규정",
 sents:[
  ["All Coastal Rail tickets show your train number, car number, and seat number.","모든 코스털 레일 기차표에는 열차 번호, 호차 번호, 좌석 번호가 적혀 있어요."],
  ["Please sit only in the seat shown on your ticket.","표에 적힌 좌석에만 앉아 주세요."],
  ["Tickets for the Express service must be booked in advance.","특급 열차 표는 미리 예약해야 해요."],
  ["Regional trains have no reserved seats, so you can sit anywhere.","지역 열차는 지정석이 없어서 아무 데나 앉아도 돼요."],
  ["You can change your ticket for free up to one hour before departure.","출발 1시간 전까지는 표를 무료로 바꿀 수 있어요."],
  ["After that, a fee of $10 will be charged.","그 뒤에는 수수료 10달러가 붙어요."],
  ["If you cancel more than 24 hours before departure, you will get a full refund.","출발 24시간 전보다 먼저 취소하면 전액 환불받아요."],
  ["Cancellations within 24 hours receive a 50% refund.","출발 24시간 안에 취소하면 50%를 환불받아요."],
  ["Passengers without a valid ticket must pay a $60 fine.","유효한 표가 없는 승객은 벌금 60달러를 내야 해요."],
  ["Each passenger may bring two large bags and one small bag.","승객 한 명당 큰 가방 두 개와 작은 가방 한 개를 가지고 탈 수 있어요."]
 ],
 vocab:[["car number","호차 번호"],["in advance","미리"],["reserved seats","지정석"],["departure","출발"],["refund","환불"],["cancellations","취소"],["fine","벌금"],["valid","유효한"]],
 qs:[
  {q:"출발 24시간 전보다 먼저 취소하면 어떻게 되나요?", c:["50%를 환불받는다","전액 환불받는다","수수료 10달러를 낸다","환불받지 못한다"], a:1, s:6},
  {q:"수수료 없이 표를 바꿀 수 있는 때는 언제까지인가요?", c:["출발 1시간 전까지","출발 24시간 전까지","출발 직전까지","언제든지"], a:0, s:4},
  {q:"유효한 표 없이 타면 얼마를 내야 하나요?", c:["10달러","50달러","60달러","표 값의 두 배"], a:2, s:8},
  {q:"지역 열차의 좌석은 어떻게 앉나요?", c:["미리 예약해야 한다","표에 적힌 좌석에만 앉는다","1등석만 있다","아무 자리에나 앉을 수 있다"], a:3, s:3}
 ]},

{id:"r08", cat:"버스", title:"Riding City Buses with a Go Card", ko:"시내버스·교통카드 이용 안내",
 sents:[
  ["The easiest way to ride city buses is with a Go Card.","시내버스를 가장 쉽게 타는 방법은 고 카드를 쓰는 거예요."],
  ["You can buy a card for $5 at any metro station or convenience store.","카드는 지하철역이나 편의점 어디서나 5달러에 살 수 있어요."],
  ["Add money to the card at machines or in stores before you travel.","타기 전에 기계나 가게에서 카드에 돈을 충전하세요."],
  ["Tap your card on the reader when you get on the bus.","버스에 탈 때 단말기에 카드를 대세요."],
  ["A bus ride costs $1.80 with the card and $2.50 in cash.","버스 요금은 카드로 1.80달러, 현금으로 2.50달러예요."],
  ["Drivers cannot give change, so please have the exact amount if you pay cash.","기사가 거스름돈을 줄 수 없으니 현금을 낼 때는 정확한 금액을 준비하세요."],
  ["If you tap again when you get off, you can transfer to another bus for free within 60 minutes.","내릴 때 카드를 다시 대면 60분 안에 다른 버스로 무료 환승할 수 있어요."],
  ["Press the red button before your stop to let the driver know.","내릴 정류장 전에 빨간 버튼을 눌러 기사에게 알리세요."],
  ["Night buses run every 30 minutes between midnight and 5 a.m.","심야 버스는 자정부터 오전 5시까지 30분마다 다녀요."],
  ["Please give your seat to anyone who needs it more.","자리가 더 필요한 분께 양보해 주세요."]
 ],
 vocab:[["convenience store","편의점"],["tap","(카드를) 대다"],["reader","(카드) 단말기"],["change","거스름돈"],["exact amount","정확한 금액"],["transfer","환승하다"],["stop","정류장"],["night buses","심야 버스"]],
 qs:[
  {q:"카드로 탈 때 버스 요금은 얼마인가요?", c:["1.80달러","2.50달러","5달러","무료"], a:0, s:4},
  {q:"현금으로 낼 때 주의할 점은 무엇인가요?", c:["지폐는 받지 않는다","정확한 금액을 준비해야 한다","기사에게 미리 말해야 한다","영수증을 받아야 한다"], a:1, s:5},
  {q:"무료로 환승하려면 어떻게 해야 하나요?", c:["30분 안에 현금으로 탄다","같은 버스를 다시 탄다","내릴 때 카드를 다시 대고 60분 안에 갈아탄다","빨간 버튼을 누른다"], a:2, s:6},
  {q:"내릴 정류장이 가까워지면 무엇을 하나요?", c:["카드를 단말기에 댄다","기사에게 큰 소리로 말한다","자리에서 일어나 기다린다","빨간 버튼을 누른다"], a:3, s:7}
 ]},

{id:"r09", cat:"택시", title:"Getting to the City: Taxis and Airport Shuttle", ko:"택시·공항 셔틀 안내",
 sents:[
  ["Official taxis wait at the taxi stand outside Exit B.","공식 택시는 B 출구 밖 택시 승강장에서 기다려요."],
  ["Please do not accept rides from drivers who approach you inside the terminal.","터미널 안에서 다가오는 기사의 차는 타지 마세요."],
  ["All official taxis use a meter.","공식 택시는 모두 미터기를 써요."],
  ["A trip to the city center usually costs between $35 and $45.","시내까지는 보통 35~45달러가 나와요."],
  ["An extra $3 is charged for each large suitcase.","큰 여행 가방은 하나에 3달러씩 더 내요."],
  ["Between 11 p.m. and 6 a.m., fares are 20% higher.","밤 11시부터 오전 6시까지는 요금이 20% 비싸요."],
  ["The Airport Shuttle is a cheaper choice at $12 per person.","공항 셔틀은 1인당 12달러로 더 저렴해요."],
  ["It leaves every 20 minutes and stops at major hotels downtown.","셔틀은 20분마다 출발하고 시내 주요 호텔에 서요."],
  ["Buy your shuttle ticket at the counter next to Exit C.","셔틀 표는 C 출구 옆 카운터에서 사세요."],
  ["Always ask for a receipt in case you leave something in the vehicle.","차에 물건을 두고 내릴 경우를 대비해 늘 영수증을 받으세요."]
 ],
 vocab:[["official","공식의"],["taxi stand","택시 승강장"],["approach","다가오다"],["meter","미터기"],["fares","요금"],["shuttle","셔틀(버스)"],["receipt","영수증"],["vehicle","차량"]],
 qs:[
  {q:"공항 셔틀 요금은 1인당 얼마인가요?", c:["3달러","12달러","20달러","35달러"], a:1, s:6},
  {q:"밤 11시부터 오전 6시 사이에 택시를 타면 어떻게 되나요?", c:["요금이 20% 비싸다","택시가 다니지 않는다","가방 요금이 없다","셔틀만 탈 수 있다"], a:0, s:5},
  {q:"셔틀 표는 어디서 사나요?", c:["버스 안에서 기사에게","호텔 프런트","B 출구 택시 승강장","C 출구 옆 카운터"], a:3, s:8},
  {q:"영수증을 받으라고 하는 이유는 무엇인가요?", c:["요금을 환불받기 위해","세금을 돌려받기 위해","차에 물건을 두고 내릴 경우를 대비해","다음에 할인받기 위해"], a:2, s:9}
 ]},

{id:"r10", cat:"렌터카", title:"Sunway Car Rental: Terms and Conditions", ko:"선웨이 렌터카 대여 조건",
 sents:[
  ["To rent a car, you must be at least 21 years old.","차를 빌리려면 만 21세 이상이어야 해요."],
  ["Drivers under 25 pay an extra $15 per day.","25세 미만 운전자는 하루 15달러를 더 내요."],
  ["Please bring your driver's license, an international driving permit, and a credit card.","운전면허증, 국제운전면허증, 신용카드를 가져오세요."],
  ["A deposit of $300 will be held on your card until the car is returned.","차를 반납할 때까지 카드에 보증금 300달러가 잡혀 있어요."],
  ["The car comes with a full tank of gas and must be returned full.","차는 기름을 가득 채운 상태로 드리고, 가득 채워 반납해야 해요."],
  ["If it is not full, we will charge $3 for each missing liter.","가득 차 있지 않으면 모자란 1리터마다 3달러를 받아요."],
  ["Basic insurance is included, but it does not cover damage to tires or glass.","기본 보험이 포함되지만 타이어나 유리 손상은 보장하지 않아요."],
  ["Returning the car more than one hour late will add a full day's charge.","1시간 넘게 늦게 반납하면 하루 요금이 더 붙어요."],
  ["Only drivers listed on the contract may drive the car.","계약서에 이름이 있는 사람만 운전할 수 있어요."],
  ["In case of an accident, call the police first and then our 24-hour help line.","사고가 나면 먼저 경찰에 전화하고, 그다음 24시간 상담 전화로 연락하세요."]
 ],
 vocab:[["rent","빌리다"],["international driving permit","국제운전면허증"],["deposit","보증금"],["full tank","가득 찬 연료"],["insurance","보험"],["cover","보장하다"],["damage","손상"],["contract","계약서"]],
 qs:[
  {q:"25세 미만 운전자에게 해당하는 것은 무엇인가요?", c:["차를 빌릴 수 없다","하루 15달러를 더 낸다","보증금이 없다","보험이 포함되지 않는다"], a:1, s:1},
  {q:"보증금은 얼마인가요?", c:["15달러","21달러","300달러","하루 요금"], a:2, s:3},
  {q:"기본 보험이 보장하지 않는 것은 무엇인가요?", c:["타이어나 유리 손상","다른 차와의 사고","차량 도난","연료비"], a:0, s:6},
  {q:"사고가 나면 가장 먼저 무엇을 하나요?", c:["24시간 상담 전화에 건다","보험사에 연락한다","차를 가까운 지점에 반납한다","경찰에 전화한다"], a:3, s:9}
 ]},

{id:"r11", cat:"박물관", title:"City Art Museum: Visitor Information", ko:"시립 미술관 관람 안내",
 sents:[
  ["The City Art Museum is open Tuesday to Sunday from 9 a.m. to 6 p.m.","시립 미술관은 화요일부터 일요일까지 오전 9시부터 오후 6시까지 열어요."],
  ["On Fridays, it stays open until 9 p.m.","금요일에는 오후 9시까지 열어요."],
  ["The museum is closed on Mondays and public holidays.","월요일과 공휴일에는 문을 닫아요."],
  ["Tickets cost $20 for adults and $12 for students with a valid ID.","입장권은 어른 20달러, 유효한 학생증이 있는 학생은 12달러예요."],
  ["Entry is free for children under 12.","12세 미만 어린이는 무료로 들어갈 수 있어요."],
  ["Large bags and umbrellas must be left in the lockers near the main entrance.","큰 가방과 우산은 정문 근처 사물함에 맡겨야 해요."],
  ["Photos are allowed in most rooms, but please do not use a flash.","대부분의 전시실에서 사진을 찍을 수 있지만 플래시는 쓰지 마세요."],
  ["Food and drinks are not permitted in the galleries.","전시실에는 음식과 음료를 가지고 들어갈 수 없어요."],
  ["Audio guides are available in eight languages for $5.","오디오 가이드는 8개 언어로 있고 5달러예요."],
  ["Free guided tours start at 11 a.m. and 2 p.m. from the information desk.","무료 해설 투어는 오전 11시와 오후 2시에 안내 데스크에서 시작해요."]
 ],
 vocab:[["public holidays","공휴일"],["valid ID","유효한 신분증"],["entry","입장"],["lockers","사물함"],["flash","플래시"],["permitted","허용된"],["galleries","전시실"],["audio guides","오디오 가이드"]],
 qs:[
  {q:"금요일에는 몇 시에 문을 닫나요?", c:["오후 6시","오후 9시","오후 2시","오전 11시"], a:1, s:1},
  {q:"학생증이 있는 학생의 입장료는 얼마인가요?", c:["20달러","5달러","무료","12달러"], a:3, s:3},
  {q:"사진 촬영 규칙으로 맞는 것은 무엇인가요?", c:["플래시만 쓰지 않으면 대부분 전시실에서 찍을 수 있다","어디서도 찍을 수 없다","안내 데스크 허가가 필요하다","5달러를 내야 찍을 수 있다"], a:0, s:6},
  {q:"큰 가방은 어떻게 해야 하나요?", c:["전시실에 가지고 들어간다","정문 근처 사물함에 맡긴다","안내 데스크에 맡긴다","입구에서 직원에게 열어 보여 준다"], a:1, s:5}
 ]},

{id:"r12", cat:"시티투어", title:"Hop-On Hop-Off City Tour", ko:"시티 투어 버스 안내",
 sents:[
  ["Our red double-decker buses visit 14 stops around the city's top sights.","빨간 2층 버스가 도시 주요 명소 주변 정류장 14곳을 돌아요."],
  ["You can get off at any stop and get back on later.","어느 정류장에서든 내렸다가 나중에 다시 탈 수 있어요."],
  ["Buses come every 25 minutes from 9 a.m. to 5:30 p.m.","버스는 오전 9시부터 오후 5시 30분까지 25분마다 와요."],
  ["A 24-hour ticket costs $35, and a 48-hour ticket costs $50.","24시간권은 35달러, 48시간권은 50달러예요."],
  ["Your ticket starts when it is scanned for the first time.","표의 이용 시간은 처음 스캔할 때부터 시작돼요."],
  ["Free headphones are given to every passenger for the recorded guide.","녹음 안내를 들을 수 있도록 모든 승객에게 헤드폰을 무료로 드려요."],
  ["The guide is available in ten languages.","안내는 10개 언어로 들을 수 있어요."],
  ["The upper deck is open, so bring a hat or sunscreen on sunny days.","위층은 지붕이 없으니 맑은 날에는 모자나 자외선 차단제를 챙기세요."],
  ["If it rains, the upper deck may be closed.","비가 오면 위층을 닫을 수 있어요."],
  ["Tickets bought online are 10% cheaper than tickets bought on the bus.","온라인으로 산 표는 버스에서 산 표보다 10% 싸요."]
 ],
 vocab:[["double-decker","2층 버스"],["sights","명소"],["scanned","스캔된"],["headphones","헤드폰"],["recorded","녹음된"],["upper deck","위층"],["sunscreen","자외선 차단제"]],
 qs:[
  {q:"48시간권은 얼마인가요?", c:["25달러","35달러","50달러","14달러"], a:2, s:3},
  {q:"표의 이용 시간은 언제부터 시작되나요?", c:["처음 스캔할 때부터","표를 산 순간부터","오전 9시부터","첫 정류장에 도착할 때부터"], a:0, s:4},
  {q:"비가 오면 어떻게 될 수 있나요?", c:["버스 운행이 멈춘다","위층을 닫을 수 있다","표 값을 돌려준다","헤드폰을 주지 않는다"], a:1, s:8},
  {q:"표를 더 싸게 사려면 어떻게 하나요?", c:["버스 안에서 산다","정류장 매표소에서 산다","호텔에서 산다","온라인으로 산다"], a:3, s:9}
 ]},

{id:"r13", cat:"국립공원", title:"Green Valley National Park: Visitor Rules", ko:"그린밸리 국립공원 탐방 규칙",
 sents:[
  ["Welcome to Green Valley National Park.","그린밸리 국립공원에 오신 것을 환영해요."],
  ["The entrance fee is $15 per car or $5 per person on foot or by bike.","입장료는 차 한 대에 15달러, 걷거나 자전거로 오면 1인당 5달러예요."],
  ["Please stay on marked trails at all times.","언제나 표시된 탐방로로만 다니세요."],
  ["Feeding or touching wild animals is not allowed.","야생 동물에게 먹이를 주거나 만지면 안 돼요."],
  ["Keep at least 50 meters away from bears and other large animals.","곰과 다른 큰 동물에게서 최소 50미터 떨어져 있으세요."],
  ["Campfires are allowed only in fire rings at official campsites.","모닥불은 공식 야영장의 화덕에서만 피울 수 있어요."],
  ["Take all your trash with you, because there are no bins on the trails.","탐방로에는 쓰레기통이 없으니 쓰레기는 모두 가지고 가세요."],
  ["Drones may not be flown anywhere in the park without a permit.","허가 없이는 공원 어디에서도 드론을 날릴 수 없어요."],
  ["Mobile phone service is weak in many areas, so carry a paper map.","많은 곳에서 휴대전화 신호가 약하니 종이 지도를 챙기세요."],
  ["Tell someone your plans before you start a long hike.","긴 산행을 시작하기 전에 누군가에게 일정을 알려 두세요."],
  ["The visitor center closes at 5 p.m., but the park is open 24 hours.","방문자 센터는 오후 5시에 닫지만 공원은 24시간 열려 있어요."]
 ],
 vocab:[["entrance fee","입장료"],["on foot","걸어서"],["marked trails","표시된 탐방로"],["feeding","먹이 주기"],["campfires","모닥불"],["campsites","야영장"],["trash","쓰레기"],["permit","허가(증)"]],
 qs:[
  {q:"걸어서 들어가는 사람의 입장료는 얼마인가요?", c:["5달러","15달러","50달러","무료"], a:0, s:1},
  {q:"곰과는 최소 얼마나 떨어져 있어야 하나요?", c:["5미터","15미터","50미터","100미터"], a:2, s:4},
  {q:"쓰레기는 어떻게 해야 하나요?", c:["탐방로 옆 쓰레기통에 버린다","모두 직접 가지고 간다","방문자 센터에 맡긴다","야영장에서 태운다"], a:1, s:6},
  {q:"종이 지도를 챙기라고 하는 이유는 무엇인가요?", c:["방문자 센터가 일찍 닫아서","드론을 쓸 수 없어서","탐방로에 표시가 없어서","많은 곳에서 휴대전화 신호가 약해서"], a:3, s:8}
 ]},

{id:"r14", cat:"해변", title:"Sunset Beach: Safety Information", ko:"선셋 비치 안전 안내",
 sents:[
  ["Lifeguards are on duty from 9 a.m. to 6 p.m., May to September.","인명구조원은 5월부터 9월까지 오전 9시부터 오후 6시까지 근무해요."],
  ["Please swim only between the red and yellow flags.","빨간색과 노란색 깃발 사이에서만 수영하세요."],
  ["A red flag means the sea is dangerous and swimming is not allowed.","빨간 깃발은 바다가 위험해 수영할 수 없다는 뜻이에요."],
  ["Strong currents can pull swimmers away from the shore.","강한 물살이 수영하는 사람을 해변에서 먼 곳으로 끌고 갈 수 있어요."],
  ["If you are caught in a current, do not swim against it.","물살에 휩쓸리면 물살을 거슬러 헤엄치지 마세요."],
  ["Swim parallel to the beach until you are free, then swim back to shore.","물살에서 벗어날 때까지 해변과 나란히 헤엄친 뒤 해변으로 돌아오세요."],
  ["If you need help, raise one arm and wave it.","도움이 필요하면 한쪽 팔을 들어 흔드세요."],
  ["Glass bottles and dogs are not allowed on the beach in summer.","여름에는 해변에 유리병과 개를 가지고 올 수 없어요."],
  ["The sun is very strong at midday, so use sunscreen and drink plenty of water.","한낮에는 햇볕이 아주 강하니 자외선 차단제를 바르고 물을 충분히 마시세요."],
  ["Children must be watched by an adult at all times.","어린이는 늘 어른이 지켜봐야 해요."]
 ],
 vocab:[["lifeguards","인명구조원"],["on duty","근무 중인"],["flags","깃발"],["currents","물살, 해류"],["shore","해안, 물가"],["parallel","나란히"],["wave","흔들다"],["midday","한낮"]],
 qs:[
  {q:"빨간 깃발은 무슨 뜻인가요?", c:["인명구조원이 근무 중이다","이곳에서 수영하라는 뜻이다","바다가 위험해 수영할 수 없다","썰물 시간이다"], a:2, s:2},
  {q:"물살에 휩쓸리면 어떻게 해야 하나요?", c:["물살을 거슬러 해변 쪽으로 헤엄친다","해변과 나란히 헤엄쳐 빠져나온다","물속으로 잠수한다","깃발 쪽으로 곧장 간다"], a:1, s:5},
  {q:"도움이 필요할 때는 어떻게 알리나요?", c:["한쪽 팔을 들어 흔든다","호루라기를 분다","두 팔로 물을 친다","깃발을 흔든다"], a:0, s:6},
  {q:"여름에 해변에 가지고 올 수 없는 것은 무엇인가요?", c:["자외선 차단제","물병","파라솔","유리병과 개"], a:3, s:7}
 ]},

{id:"r15", cat:"식당", title:"Olive Tree Café: How to Order", ko:"올리브트리 카페 메뉴·주문 안내",
 sents:[
  ["Please wait to be seated by our staff.","직원이 자리를 안내할 때까지 기다려 주세요."],
  ["Our menu is also available in English, Chinese, and Korean.","메뉴는 영어, 중국어, 한국어로도 있어요."],
  ["Dishes marked with a green leaf are vegetarian.","초록 잎 표시가 있는 요리는 채식 요리예요."],
  ["If you have a food allergy, please tell your server before you order.","음식 알레르기가 있으면 주문하기 전에 담당 직원에게 말씀하세요."],
  ["Lunch specials are served from 11:30 a.m. to 2:30 p.m. on weekdays.","점심 특선은 평일 오전 11시 30분부터 오후 2시 30분까지 나와요."],
  ["Each special comes with soup or salad and a soft drink for $16.","특선에는 수프나 샐러드, 탄산음료가 함께 나오고 16달러예요."],
  ["Tap water is free, but bottled water costs $3.","수돗물은 무료지만 생수는 3달러예요."],
  ["A 10% service charge is added to the bill for groups of six or more.","6명 이상 단체는 계산서에 봉사료 10%가 붙어요."],
  ["Tipping is not required, but it is always welcome.","팁은 꼭 내지 않아도 되지만, 주시면 언제나 감사해요."],
  ["Please pay at the counter near the door when you are ready.","준비되면 문 근처 카운터에서 계산해 주세요."]
 ],
 vocab:[["seated","자리에 앉은"],["dishes","요리"],["vegetarian","채식의"],["allergy","알레르기"],["server","담당 직원"],["specials","특선 메뉴"],["service charge","봉사료"],["tipping","팁 주기"]],
 qs:[
  {q:"초록 잎 표시는 무엇을 뜻하나요?", c:["매운 요리","오늘의 추천 요리","채식 요리","어린이 메뉴"], a:2, s:2},
  {q:"점심 특선은 얼마인가요?", c:["16달러","3달러","10달러","12달러"], a:0, s:5},
  {q:"6명 이상 단체 손님에게 해당하는 것은 무엇인가요?", c:["10% 할인을 받는다","계산서에 봉사료 10%가 붙는다","팁을 꼭 내야 한다","미리 예약해야 한다"], a:1, s:7},
  {q:"음식 알레르기가 있으면 어떻게 해야 하나요?", c:["계산할 때 말한다","메뉴에서 표시를 찾는다","카운터에 전화한다","주문하기 전에 담당 직원에게 말한다"], a:3, s:3}
 ]},

{id:"r16", cat:"면세환급", title:"Tax-Free Shopping for Visitors", ko:"외국인 면세 쇼핑·세금 환급 안내",
 sents:[
  ["Visitors can get back the 10% sales tax on goods taken out of the country.","방문객은 나라 밖으로 가지고 나가는 물건에 붙은 판매세 10%를 돌려받을 수 있어요."],
  ["Look for shops with a blue Tax-Free sign in the window.","창문에 파란색 '택스프리' 표시가 붙은 가게를 찾으세요."],
  ["You must spend at least $100 in one shop on the same day.","같은 날 한 가게에서 100달러 이상 사야 해요."],
  ["Show your passport when you pay, and ask for a tax refund form.","계산할 때 여권을 보여 주고 세금 환급 서류를 달라고 하세요."],
  ["Food, drinks, and hotel bills cannot be included.","음식, 음료, 호텔 요금은 포함할 수 없어요."],
  ["Keep the goods unused and in their original bags until you leave.","출국할 때까지 물건을 쓰지 말고 원래 포장 그대로 두세요."],
  ["At the airport, take your goods and forms to the customs desk before check-in.","공항에서는 체크인하기 전에 물건과 서류를 세관 창구로 가져가세요."],
  ["A customs officer will check the items and stamp your forms.","세관 직원이 물건을 확인하고 서류에 도장을 찍어 줘요."],
  ["Then you can receive your refund in cash or on your credit card at the refund counter.","그다음 환급 창구에서 현금이나 신용카드로 환급금을 받을 수 있어요."],
  ["A small handling fee may be taken from your refund.","환급금에서 약간의 처리 수수료를 뗄 수 있어요."]
 ],
 vocab:[["sales tax","판매세"],["goods","물건, 상품"],["tax refund","세금 환급"],["unused","쓰지 않은"],["original","원래의"],["customs","세관"],["stamp","도장을 찍다"],["handling fee","처리 수수료"]],
 qs:[
  {q:"세금을 돌려받으려면 한 가게에서 최소 얼마를 써야 하나요?", c:["10달러","50달러","100달러","금액 제한 없음"], a:2, s:2},
  {q:"세금 환급 대상에 포함할 수 없는 것은 무엇인가요?", c:["옷","호텔 요금","가방","화장품"], a:1, s:4},
  {q:"공항에서 체크인하기 전에 무엇을 해야 하나요?", c:["물건과 서류를 세관 창구로 가져간다","환급 창구에서 돈을 받는다","면세점에서 물건을 더 산다","서류를 우편으로 보낸다"], a:0, s:6},
  {q:"이 안내문의 주된 목적은 무엇인가요?", c:["시장 영업시간 안내","공항 세관 규정 변경 안내","신용카드 수수료 안내","외국인 방문객이 세금을 돌려받는 방법 안내"], a:3, s:0}
 ]},

{id:"r17", cat:"약국·병원", title:"Getting Medical Help", ko:"약국·응급 진료 안내",
 sents:[
  ["For small health problems such as colds or headaches, visit a pharmacy.","감기나 두통 같은 가벼운 증상은 약국에 가세요."],
  ["Pharmacies have a green cross sign, and most are open from 9 a.m. to 8 p.m.","약국에는 초록색 십자가 표시가 있고, 대부분 오전 9시부터 오후 8시까지 열어요."],
  ["Pharmacists can give advice and sell many medicines without a prescription.","약사는 상담해 주고, 많은 약을 처방전 없이 팔 수 있어요."],
  ["Some medicines, including antibiotics, need a doctor's prescription.","항생제를 비롯한 일부 약은 의사 처방전이 있어야 해요."],
  ["At night and on Sundays, at least one pharmacy in each area stays open.","밤과 일요일에도 지역마다 적어도 약국 한 곳은 문을 열어요."],
  ["The address is posted on the door of every pharmacy.","그 약국 주소는 모든 약국 문에 붙어 있어요."],
  ["In an emergency, call 190 for an ambulance.","응급 상황에서는 190에 전화해 구급차를 부르세요."],
  ["City Hospital has a 24-hour emergency room with English-speaking staff.","시립 병원에는 영어를 하는 직원이 있는 24시간 응급실이 있어요."],
  ["Bring your passport and travel insurance card with you.","여권과 여행자 보험 카드를 가져가세요."],
  ["Keep all receipts so you can claim your costs from your insurance company later.","나중에 보험사에 비용을 청구할 수 있도록 영수증을 모두 보관하세요."]
 ],
 vocab:[["pharmacy","약국"],["pharmacists","약사"],["prescription","처방전"],["antibiotics","항생제"],["emergency","응급 상황"],["ambulance","구급차"],["travel insurance","여행자 보험"],["claim","청구하다"]],
 qs:[
  {q:"약국은 어떤 표시로 알아볼 수 있나요?", c:["빨간색 십자가","초록색 십자가","파란색 H","노란색 간판"], a:1, s:1},
  {q:"처방전이 있어야 살 수 있는 약은 무엇인가요?", c:["감기약","두통약","항생제","모든 약"], a:2, s:3},
  {q:"밤이나 일요일에 문을 연 약국은 어떻게 찾나요?", c:["약국 문에 붙은 주소를 본다","190에 전화한다","시립 병원에 묻는다","호텔에 묻는다"], a:0, s:5},
  {q:"영수증을 모두 보관하라고 하는 이유는 무엇인가요?", c:["약을 바꾸기 위해","세금을 돌려받기 위해","병원에 다시 가기 위해","나중에 보험사에 비용을 청구하기 위해"], a:3, s:9}
 ]},

{id:"r18", cat:"분실물", title:"Central Station Lost Property Office", ko:"중앙역 분실물 센터 안내",
 sents:[
  ["The Lost Property Office is next to Platform 1 at Central Station.","분실물 센터는 중앙역 1번 승강장 옆에 있어요."],
  ["It is open Monday to Saturday from 8 a.m. to 7 p.m.","월요일부터 토요일까지 오전 8시부터 오후 7시까지 열어요."],
  ["Items found on trains and in stations are kept here for 30 days.","열차와 역에서 찾은 물건은 이곳에서 30일 동안 보관해요."],
  ["Most items arrive at the office within two days.","대부분의 물건은 이틀 안에 센터로 들어와요."],
  ["You can also report a lost item online at any time.","잃어버린 물건은 언제든 온라인으로도 신고할 수 있어요."],
  ["Please describe the item clearly, including its color, brand, and where you lost it.","물건의 색, 상표, 잃어버린 곳을 포함해 자세히 설명해 주세요."],
  ["To collect an item, you must show photo ID.","물건을 찾아가려면 사진이 있는 신분증을 보여 줘야 해요."],
  ["A fee of $5 is charged for each item returned.","돌려받는 물건 하나마다 5달러를 내요."],
  ["If you cannot come in person, we can post the item to you for an extra fee.","직접 올 수 없으면 추가 요금을 내고 우편으로 받을 수 있어요."],
  ["Lost passports are sent to the police after three days.","분실된 여권은 사흘 뒤 경찰로 보내요."]
 ],
 vocab:[["lost property","분실물"],["platform","승강장"],["report","신고하다"],["describe","설명하다"],["brand","상표"],["collect","찾아가다"],["photo ID","사진이 있는 신분증"],["in person","직접"]],
 qs:[
  {q:"찾은 물건은 얼마 동안 보관하나요?", c:["30일","2일","3일","7일"], a:0, s:2},
  {q:"물건을 찾아갈 때 꼭 필요한 것은 무엇인가요?", c:["기차표","사진이 있는 신분증","영수증","신고 번호"], a:1, s:6},
  {q:"센터에 직접 올 수 없으면 어떻게 하나요?", c:["경찰서에서 받는다","친구가 대신 와야 한다","추가 요금을 내고 우편으로 받는다","30일 뒤에 다시 신고한다"], a:2, s:8},
  {q:"분실된 여권은 어떻게 처리되나요?", c:["30일 동안 보관된다","대사관으로 바로 보낸다","우편으로 주인에게 보낸다","사흘 뒤 경찰로 보낸다"], a:3, s:9}
 ]},

{id:"r19", cat:"환전", title:"Money Exchange and ATMs", ko:"환전·ATM 이용 안내",
 sents:[
  ["You can exchange money at the airport, banks, and exchange offices downtown.","돈은 공항, 은행, 시내 환전소에서 바꿀 수 있어요."],
  ["Airport rates are usually the worst, so change only a small amount there.","공항 환율이 보통 가장 나쁘니 공항에서는 조금만 바꾸세요."],
  ["Banks are open from 9 a.m. to 4 p.m. on weekdays.","은행은 평일 오전 9시부터 오후 4시까지 열어요."],
  ["Always check both the exchange rate and the commission before you hand over money.","돈을 건네기 전에 늘 환율과 수수료를 함께 확인하세요."],
  ["ATMs are easy to find in shopping areas and metro stations.","ATM은 쇼핑가와 지하철역에서 쉽게 찾을 수 있어요."],
  ["Most machines accept foreign cards and offer English instructions.","대부분의 기계는 외국 카드를 받고 영어 안내도 있어요."],
  ["Your own bank may charge a fee for each withdrawal abroad.","내 은행이 해외 인출 때마다 수수료를 받을 수 있어요."],
  ["If an ATM asks whether to charge you in your home currency, choose the local currency.","ATM이 자국 통화로 결제할지 물으면 현지 통화를 고르세요."],
  ["This usually gives you a better rate.","보통 그쪽 환율이 더 좋아요."],
  ["Cover the keypad when you enter your PIN.","비밀번호를 누를 때는 키패드를 가리세요."],
  ["If the machine keeps your card, contact the bank shown on the ATM immediately.","기계가 카드를 돌려주지 않으면 ATM에 표시된 은행에 바로 연락하세요."]
 ],
 vocab:[["exchange","환전하다"],["rates","환율"],["commission","수수료"],["withdrawal","인출"],["abroad","해외에서"],["currency","통화"],["keypad","키패드, 숫자판"],["PIN","비밀번호"]],
 qs:[
  {q:"공항 환전에 대한 조언으로 맞는 것은 무엇인가요?", c:["환율이 가장 좋으니 많이 바꾼다","환율이 가장 나쁘니 조금만 바꾼다","수수료가 없다","주말에만 연다"], a:1, s:1},
  {q:"은행 영업시간은 언제인가요?", c:["평일 오전 9시~오후 4시","매일 오전 9시~오후 4시","평일 오전 9시~오후 6시","24시간"], a:0, s:2},
  {q:"ATM이 결제 통화를 물으면 무엇을 고르라고 하나요?", c:["자국 통화","미국 달러","아무거나","현지 통화"], a:3, s:7},
  {q:"기계가 카드를 돌려주지 않으면 어떻게 하나요?", c:["다음 날 다시 온다","경찰에 신고한다","ATM에 표시된 은행에 바로 연락한다","다른 ATM을 쓴다"], a:2, s:10}
 ]},

{id:"r20", cat:"유심·와이파이", title:"Staying Connected: SIM Cards and Wi-Fi", ko:"유심·와이파이 안내",
 sents:[
  ["Prepaid SIM cards are sold at the airport arrivals hall and at phone shops in town.","선불 유심은 공항 도착 홀과 시내 휴대전화 가게에서 팔아요."],
  ["A tourist SIM with 20 GB of data for 15 days costs $25.","15일 동안 데이터 20GB를 쓰는 관광객용 유심은 25달러예요."],
  ["You need to show your passport to buy a SIM card.","유심을 사려면 여권을 보여 줘야 해요."],
  ["Make sure your phone is unlocked before you buy one.","사기 전에 휴대전화가 잠금 해제(자급제) 상태인지 확인하세요."],
  ["Staff will help you set up the card, which takes about ten minutes.","직원이 유심 설정을 도와주며 10분쯤 걸려요."],
  ["If you would rather keep your own number, consider an eSIM.","원래 번호를 그대로 쓰고 싶으면 이심(eSIM)을 생각해 보세요."],
  ["You can buy it online and scan a QR code to install it.","온라인으로 사서 QR 코드를 스캔하면 설치할 수 있어요."],
  ["Free Wi-Fi is available in most cafés, hotels, and metro stations.","대부분의 카페, 호텔, 지하철역에서 무료 와이파이를 쓸 수 있어요."],
  ["Avoid online banking on public networks, because they may not be secure.","공용 네트워크는 안전하지 않을 수 있으니 인터넷 뱅킹은 피하세요."],
  ["A pocket Wi-Fi device can be rented for $6 a day.","휴대용 와이파이 기기는 하루 6달러에 빌릴 수 있어요."]
 ],
 vocab:[["prepaid","선불의"],["data","데이터"],["unlocked","잠금 해제된"],["set up","설정하다"],["install","설치하다"],["public networks","공용 네트워크"],["secure","안전한"],["rented","빌린, 대여된"]],
 qs:[
  {q:"관광객용 유심은 얼마인가요?", c:["6달러","15달러","20달러","25달러"], a:3, s:1},
  {q:"유심을 살 때 보여 줘야 하는 것은 무엇인가요?", c:["여권","신용카드","호텔 예약 확인서","QR 코드"], a:0, s:2},
  {q:"공용 와이파이에서 피하라고 한 것은 무엇인가요?", c:["지도 보기","메시지 보내기","인터넷 뱅킹","사진 올리기"], a:2, s:8},
  {q:"휴대용 와이파이 기기 대여료는 얼마인가요?", c:["무료","하루 6달러","하루 15달러","하루 25달러"], a:1, s:9}
 ]},

{id:"r21", cat:"날씨경보", title:"Typhoon Warning for Visitors", ko:"태풍 경보 안내",
 sents:[
  ["A strong typhoon is expected to reach the island on Thursday evening.","강한 태풍이 목요일 저녁 섬에 닿을 것으로 예상돼요."],
  ["Heavy rain and winds of up to 150 km per hour are likely.","폭우와 함께 최대 시속 150km의 바람이 불 가능성이 커요."],
  ["All ferries and most flights will be cancelled from Thursday noon until Friday night.","목요일 정오부터 금요일 밤까지 모든 배편과 대부분의 항공편이 취소돼요."],
  ["Please contact your airline or hotel to check your travel plans.","항공사나 호텔에 연락해 여행 일정을 확인하세요."],
  ["Stay indoors once the storm begins, and keep away from windows.","폭풍이 시작되면 실내에 머물고 창문에서 떨어져 있으세요."],
  ["Do not go to the beach or near rivers, as water levels can rise quickly.","물이 빠르게 불어날 수 있으니 해변이나 강 근처에 가지 마세요."],
  ["Buy drinking water, food, and batteries before Thursday afternoon.","목요일 오후 전에 마실 물, 음식, 건전지를 사 두세요."],
  ["Shops and restaurants may close early.","가게와 식당이 일찍 문을 닫을 수 있어요."],
  ["Keep your phone charged and follow local news for updates.","휴대전화를 충전해 두고 현지 뉴스로 새 소식을 확인하세요."],
  ["In an emergency, call the tourist help line at 1450.","긴급할 때는 관광객 도움 전화 1450으로 연락하세요."]
 ],
 vocab:[["typhoon","태풍"],["expected","예상되는"],["cancelled","취소된"],["indoors","실내에"],["storm","폭풍"],["water levels","수위"],["batteries","건전지"],["updates","새 소식"]],
 qs:[
  {q:"태풍은 언제 섬에 닿을 것으로 예상되나요?", c:["목요일 저녁","목요일 정오","금요일 밤","금요일 아침"], a:0, s:0},
  {q:"배편이 취소되는 기간은 언제인가요?", c:["목요일 저녁부터 금요일 아침까지","금요일 하루","목요일 정오부터 금요일 밤까지","목요일 오후만"], a:2, s:2},
  {q:"하지 말라고 한 행동은 무엇인가요?", c:["실내에 머문다","창문에서 떨어져 있는다","휴대전화를 충전해 둔다","해변이나 강 근처에 간다"], a:3, s:5},
  {q:"목요일 오후 전에 사 두라고 한 것은 무엇인가요?", c:["우산과 우비","마실 물, 음식, 건전지","돌아가는 항공권","유심 카드"], a:1, s:6}
 ]},

{id:"r22", cat:"축제", title:"Riverside Summer Festival Program", ko:"리버사이드 여름 축제 일정",
 sents:[
  ["The Riverside Summer Festival runs from July 18 to July 20 in Central Park.","리버사이드 여름 축제는 7월 18일부터 20일까지 센트럴 파크에서 열려요."],
  ["Entry is free, but some concerts need a ticket.","입장은 무료지만 일부 공연은 표가 필요해요."],
  ["The opening parade starts at 5 p.m. on Friday at the Old Bridge.","개막 퍼레이드는 금요일 오후 5시에 올드 브리지에서 시작해요."],
  ["Live music plays on the main stage from 6 p.m. to 11 p.m. every night.","메인 무대에서는 매일 밤 오후 6시부터 11시까지 라이브 공연이 열려요."],
  ["On Saturday, a food market with dishes from over 30 countries opens at noon.","토요일 정오에는 30개국이 넘는 나라의 요리를 파는 음식 장터가 열려요."],
  ["Fireworks begin at 10 p.m. on Sunday over the river.","일요일 밤 10시에 강 위에서 불꽃놀이가 시작돼요."],
  ["Arrive early, because the best viewing spots fill up quickly.","좋은 관람 자리는 금방 차니 일찍 오세요."],
  ["Glass bottles and pets are not allowed in the festival area.","축제장에는 유리병과 반려동물을 가지고 들어올 수 없어요."],
  ["Extra buses and trains will run until 1 a.m. each night.","매일 밤 새벽 1시까지 버스와 열차가 추가로 다녀요."],
  ["If it rains heavily, events may be moved or cancelled, so check our website.","비가 많이 오면 행사가 옮겨지거나 취소될 수 있으니 웹사이트를 확인하세요."]
 ],
 vocab:[["opening parade","개막 퍼레이드"],["live music","라이브 음악"],["main stage","메인 무대"],["fireworks","불꽃놀이"],["viewing spots","관람 자리"],["fill up","가득 차다"],["pets","반려동물"],["heavily","심하게, 많이"]],
 qs:[
  {q:"불꽃놀이는 언제 시작하나요?", c:["금요일 밤 10시","일요일 밤 10시","토요일 정오","일요일 밤 11시"], a:1, s:5},
  {q:"입장료에 대한 설명으로 맞는 것은 무엇인가요?", c:["입장은 무료지만 일부 공연은 표가 필요하다","모든 행사가 유료다","금요일만 무료다","입장료는 30달러다"], a:0, s:1},
  {q:"음식 장터는 언제 열리나요?", c:["금요일 오후 5시","토요일 정오","일요일 정오","매일 오후 6시"], a:1, s:4},
  {q:"비가 많이 오면 어떻게 하라고 하나요?", c:["행사는 그대로 진행되니 우산을 챙긴다","표를 환불받는다","버스가 끊기니 일찍 떠난다","행사가 바뀔 수 있으니 웹사이트를 확인한다"], a:3, s:9}
 ]},

{id:"r23", cat:"페리", title:"Blue Bay Ferries: Boarding Information", ko:"블루베이 페리 승선 안내",
 sents:[
  ["Ferries to Pine Island leave from Pier 3 every day at 8 a.m., 12 p.m., and 4 p.m.","파인섬행 페리는 매일 오전 8시, 낮 12시, 오후 4시에 3번 부두에서 출발해요."],
  ["The trip takes about two hours.","가는 데 약 2시간 걸려요."],
  ["Check-in closes 30 minutes before departure.","승선 수속은 출발 30분 전에 마감해요."],
  ["Passengers must show a ticket and photo ID when boarding.","승객은 배에 탈 때 표와 사진이 있는 신분증을 보여 줘야 해요."],
  ["Cars must be in the boarding line at least 60 minutes before departure.","차는 출발 최소 60분 전까지 승선 줄에 서 있어야 해요."],
  ["Each passenger may bring one large bag and one small bag free of charge.","승객 한 명당 큰 가방 하나와 작은 가방 하나는 무료로 가지고 탈 수 있어요."],
  ["Bicycles cost an extra $8 each way.","자전거는 편도마다 8달러를 더 내요."],
  ["During the trip, please stay off the car deck.","운항 중에는 차량 갑판에 들어가지 마세요."],
  ["Life jackets are under every seat, and safety instructions are shown before departure.","구명조끼는 모든 좌석 아래에 있고, 출발 전에 안전 수칙을 보여 드려요."],
  ["If the sea is too rough, sailings may be cancelled, and you will get a full refund.","바다가 너무 거칠면 운항이 취소될 수 있고, 그때는 전액 환불해 드려요."]
 ],
 vocab:[["pier","부두"],["check-in","승선 수속"],["boarding","승선, 탑승"],["each way","편도마다"],["car deck","차량 갑판"],["life jackets","구명조끼"],["rough","(바다가) 거친"],["sailings","운항편"]],
 qs:[
  {q:"승선 수속은 언제 마감하나요?", c:["출발 15분 전","출발 30분 전","출발 60분 전","출발 2시간 전"], a:1, s:2},
  {q:"차를 가지고 탈 때는 언제까지 줄에 서야 하나요?", c:["출발 30분 전","출발 2시간 전","출발 60분 전","출발 직전"], a:2, s:4},
  {q:"구명조끼는 어디에 있나요?", c:["모든 좌석 아래","차량 갑판","안내 데스크","3번 부두"], a:0, s:8},
  {q:"바다가 거칠어 운항이 취소되면 어떻게 되나요?", c:["다음 배를 무료로 탄다","50%를 돌려받는다","호텔을 제공받는다","전액 환불받는다"], a:3, s:9}
 ]},

{id:"r24", cat:"체크아웃", title:"Before You Check Out and Fly Home", ko:"체크아웃·귀국 준비 안내",
 sents:[
  ["Check-out time is 11 a.m.","체크아웃 시간은 오전 11시예요."],
  ["Late check-out until 2 p.m. is possible for $30, if a room is available.","객실 사정이 허락하면 30달러에 오후 2시까지 늦게 체크아웃할 수 있어요."],
  ["Please ask at the front desk by 9 a.m. on the day you leave.","떠나는 날 오전 9시까지 프런트에 요청해 주세요."],
  ["Before leaving, check the safe, the closet, and the bathroom for your belongings.","떠나기 전에 금고, 옷장, 욕실에 두고 가는 물건이 없는지 확인하세요."],
  ["Return your key cards to the front desk when you check out.","체크아웃할 때 카드 키를 프런트에 돌려주세요."],
  ["Mini-bar items and other charges will be added to your final bill.","미니바 이용료와 다른 요금은 최종 계산서에 더해져요."],
  ["We can store your luggage free of charge until 8 p.m.","오후 8시까지 짐을 무료로 맡아 드려요."],
  ["The airport shuttle leaves from the main entrance every hour on the hour.","공항 셔틀은 정문에서 매시 정각에 출발해요."],
  ["Please allow at least three hours for international flights.","국제선은 적어도 3시간 여유를 두세요."],
  ["Many airlines let you check in online 24 hours before your flight.","많은 항공사가 출발 24시간 전부터 온라인 체크인을 할 수 있게 해 줘요."],
  ["We hope to welcome you back soon!","곧 다시 뵙기를 바라요!"]
 ],
 vocab:[["late check-out","늦은 체크아웃"],["belongings","소지품"],["final bill","최종 계산서"],["store","보관하다"],["luggage","짐"],["on the hour","정각에"],["allow","(시간을) 두다"],["check in online","온라인 체크인하다"]],
 qs:[
  {q:"늦은 체크아웃에 대한 설명으로 맞는 것은 무엇인가요?", c:["오후 2시까지 무료다","30달러를 내면 오후 2시까지 가능하다","오후 8시까지 가능하다","오전 11시까지만 가능하다"], a:1, s:1},
  {q:"늦은 체크아웃은 언제까지 요청해야 하나요?", c:["떠나는 날 오전 11시까지","전날 밤까지","떠나는 날 오전 9시까지","오후 2시까지"], a:2, s:2},
  {q:"짐은 몇 시까지 무료로 맡길 수 있나요?", c:["오후 8시","오후 2시","오전 11시","공항 셔틀 마지막 출발 때까지"], a:0, s:6},
  {q:"국제선을 탈 때 어떻게 하라고 하나요?", c:["24시간 전에 공항에 간다","적어도 2시간 여유를 둔다","셔틀을 꼭 탄다","적어도 3시간 여유를 둔다"], a:3, s:8}
 ]}
];
