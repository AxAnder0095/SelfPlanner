using Microsoft.AspNetCore.Mvc;

namespace SelfPlanner.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestClassController : ControllerBase
    {

        private static readonly List<TestClass> _testClass = new List<TestClass>()
        {
            new TestClass { Id = Guid.NewGuid(), Name = "Alex", Age = 30 },
            new TestClass { Id = Guid.NewGuid(), Name = "Bob", Age = 25 },
            new TestClass { Id = Guid.NewGuid(), Name = "Charlie", Age = 35 }
        };

        [HttpGet]
        public ActionResult<List<TestClass>> Get()
        {
            return Ok(_testClass);
        }

        [HttpGet("{id:Guid}")]
        public ActionResult<TestClass> Get(Guid id)
        {
            var testClass = _testClass.FirstOrDefault(x => x.Id == id);
            if (testClass == null)
                return NotFound();

            return Ok(testClass);
        }

        [HttpPost]
        public ActionResult<TestClass> Post(TestClass testClass)
        {
            TestClass newTest = new TestClass
            {
                Id = Guid.NewGuid(),
                Name = testClass.Name,
                Age = testClass.Age
            };

            _testClass.Add(newTest);
            return CreatedAtAction(nameof(Get), new { id = newTest.Id }, newTest);
        }

        [HttpPut("{id:Guid}")]
        public ActionResult<TestClass> Put(Guid id, TestClass newTestClass)
        {
            var existingTestClass = _testClass.FirstOrDefault(x => x.Id == id);
            if (existingTestClass == null)
                return NotFound();

            existingTestClass.Name = newTestClass.Name;
            existingTestClass.Age = newTestClass.Age;

            return Ok(existingTestClass);
        }

        [HttpDelete("{id:Guid}")]
        public ActionResult Delete(Guid id)
        {
            var existingTestClass = _testClass.FirstOrDefault(x => x.Id == id);
            if (existingTestClass == null)
                return NotFound();

            _testClass.Remove(existingTestClass);
            return NoContent();
        }
    }
}