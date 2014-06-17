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
    class NonStaticTests {
        internal NonStatic nonstatic;

        [Test]
        public void TestConcreteWithMoq() {

            Mock<NonStatic> nonstaticMock = new Mock<NonStatic>();
            nonstaticMock.Setup(x => x.ReturnMyProperty()).Returns("Hello World!");

            nonstaticMock.Object.toRet = "NOT Hello World!";
            nonstaticMock.Object.ReturnMyProperty().Should().Be("Hello World!");

            string toRet = "GoodBye Moq!";
            nonstatic = new NonStatic();
            nonstatic.toRet = toRet;
            nonstatic.ReturnMyProperty().Should().Be(toRet);

        }


    }
}

