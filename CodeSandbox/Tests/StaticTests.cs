using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using Moq.Protected;
using NUnit.Framework;

namespace CodeSandbox.Tests {
    [TestFixture]
    class StaticTests {
        internal Static _static;

        [Test]
        public void TestConcreteWithMoq() {
            //Mock<Static> _staticMock = new Mock<Static>();
            //_staticMock.Setup(x => x.ReturnString(It.IsAny<string>())).Returns("testString");

            //_staticMock.Object.ReturnString("test").Should().Be("testString", "Compile errors, can't moq concrete as static.");
        }


    }
}

