function decodeApiResponse(apiRespone) {
    var result = JSON.parse(apiRespone)
    var response = JSON.parse(result.response)

    return response
}

function fetchAndDisplayEmployees () {
    var employeeListResponse = httpGet("http://dummy.restapiexample.com/api/v1/employees")
    var response = decodeApiResponse(employeeListResponse)
    var employeesList = response.data

    employeesList.forEach(function (data) {
        log("https://www.google.com" + data.employee_name, "blue")
    })
}

function createEmployeeAndDisplay () {
    var employeeCreateResponse = httpPost(
        "http://dummy.restapiexample.com/api/v1/create",
        JSON.stringify({
            "name": "Manoj Singh Negi",
            "salary": "15",
            "age": "22"
        }),
        {
            "content-type": "application/json"
        }
    )
    
    var response = decodeApiResponse(employeeCreateResponse)
    
    if (response.status === "success") {
        notify("Employee created", "success", 3000)
        Object.keys(response.data)
            .forEach(function (key) {
                log(key + ": " + response.data[key], "blue")
            })
    }
}

fetchAndDisplayEmployees()
createEmployeeAndDisplay()
