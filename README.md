# fastify-swagger-docx
1) чтобы запустить данный микросервис, откройте консоль в каталоге и наберите npm run dev
2) чтобы перейти на swagger ui в браузере перейдите по ссылке http://localhost:5000/documentation/static/index.html
3) нажимаете на ![image](https://user-images.githubusercontent.com/78692798/187675615-502d0e08-662f-4e70-b9bc-a44f9329a1b1.png)
4) нажимаете на ![image](https://user-images.githubusercontent.com/78692798/187675701-3c149aac-f042-4f3d-95b4-ef30cab70eaf.png)
5) в данном блоке вы описываете всю нужную информацию для создания документа по шаблону, который лежит в каталогу server/documents/templates ![image](https://user-images.githubusercontent.com/78692798/187675872-150d589c-01a4-48ef-aa55-b10ff6e06a70.png)
6) пример для отправки
[
    {"key": "name_of_document", "value": "test10"},
    {"key": "name_of_template", "value": "sim-card"},
    {"key": "year", "value": "2022"},
    {"key": "COM2_excess_count", "value": "22"},
    {"key": "COM2_notify_count", "value": "200"},
    {"key": "client_excess", "value" : [
                                        {
                                         "COM2_position_excess" : "1",
                                         "COM2_excess_date": "24.02.2022",
                                         "COM2_excess_phoneNumber": "+79881488666",
                                         "COM2_excess_name": "sdsdsds",
                                         "COM2_excess_job": "sds",
                                         "COM2_excess_limit": "gfgddf",
                                         "COM2_excess_account": "sfdfd",
                                         "COM2_excess_excess": "dvdgdg"
                                         },
                                         {
                                         "COM2_position_excess" : "2",
                                         "COM2_excess_date": "24.02.2022",
                                         "COM2_excess_phoneNumber": "+7sfsfsf6",
                                         "COM2_excess_name": "sdsdsds",
                                         "COM2_excess_job": "sds",
                                         "COM2_excess_limit": "sdsdsdsd",
                                         "COM2_excess_account": "ssdsd",
                                         "COM2_excess_excess": "sdsds"
                                         },
					{
                                         "COM2_position_excess" : "1",
                                         "COM2_excess_date": "24.02.2022",
                                         "COM2_excess_phoneNumber": "+79881488666",
                                         "COM2_excess_name": "sdsdsds",
                                         "COM2_excess_job": "sds",
                                         "COM2_excess_limit": "gfgddf",
                                         "COM2_excess_account": "sfdfd",
                                         "COM2_excess_excess": "dvdgdg"
                                         },
                                         {
                                         "COM2_position_excess" : "2",
                                         "COM2_excess_date": "24.02.2022",
                                         "COM2_excess_phoneNumber": "+7sfsfsf6",
                                         "COM2_excess_name": "sdsdsds",
                                         "COM2_excess_job": "sds",
                                         "COM2_excess_limit": "sdsdsdsd",
                                         "COM2_excess_account": "ssdsd",
                                         "COM2_excess_excess": "sdsds"
                                         },
					{
                                         "COM2_position_excess" : "1",
                                         "COM2_excess_date": "24.02.2022",
                                         "COM2_excess_phoneNumber": "+79881488666",
                                         "COM2_excess_name": "sdsdsds",
                                         "COM2_excess_job": "sds",
                                         "COM2_excess_limit": "gfgddf",
                                         "COM2_excess_account": "sfdfd",
                                         "COM2_excess_excess": "dvdgdg"
                                         },
                                         {
                                         "COM2_position_excess" : "2",
                                         "COM2_excess_date": "24.02.2022",
                                         "COM2_excess_phoneNumber": "+7sfsfsf6",
                                         "COM2_excess_name": "sdsdsds",
                                         "COM2_excess_job": "sds",
                                         "COM2_excess_limit": "sdsdsdsd",
                                         "COM2_excess_account": "ssdsd",
                                         "COM2_excess_excess": "sdsds"
                                         }
                                       ]
                                      },
    {"key": "client_notify", "value" : [
                                        {
                                         "COM2_position_notify" : "1",
                                         "COM2_notify_phoneNumber": "+999999999999",
                                         "COM2_notify_name": "dssdsd",
                                         "COM2_notify_job": "sdsdsds",
                                         "COM2_notify_excess": "sds",
                                         "COM2_notify_address": "sdsdsdsd"
                                         },
                                         {
                                         "COM2_position_notify" : "2",
                                         "COM2_notify_phoneNumber": "+999999",
                                         "COM2_notify_name": "dss22",
                                         "COM2_notify_job": "s2234234",
                                         "COM2_notify_excess": "s22222",
                                         "COM2_notify_address": "dddddd"
                                         }
                                       ]
                                      }
]

7) нажимаете ![image](https://user-images.githubusercontent.com/78692798/187676123-e8b9bbb1-80db-496f-b03a-8f0a4e446f7c.png)
8) ответом будет ссылка на скачивание, вам достаточно её ввести в браузере и начнётся загрузка 
