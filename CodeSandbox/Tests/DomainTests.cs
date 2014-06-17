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
    class DomainTests {
        [Test]
        public void WhenDateTimeIsSet_ItShouldOnlySetDateValue() {
            DateTimeModel dtm = new DateTimeModel();
            DateTime ? now = DateTime.Now;
            dtm.dt = now;
            dtm.dt.Should().Be(now.GetValueOrDefault().Date);

        }

    }
}
