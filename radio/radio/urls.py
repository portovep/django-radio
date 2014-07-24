from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from radio.libs.non_staff_admin.admin import non_staff_admin_site
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'radio.libs.home.views.index'),
    url(r'^login/$', 'radio.libs.home.views.user_login', name="login"),
    url(r'^logout/$', 'radio.libs.home.views.user_logout', name="logout"),
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^configuration/schedule_editor/', 'radio.apps.dashboard.views.full_calendar', name="schedule_editor"),
    url(r'^configuration/', include(non_staff_admin_site.urls), name="non_staff_admin"),
    url(r'^schedules/', include('radio.apps.schedules.urls', namespace="schedules")),
    url(r'^dashboard/', include('radio.apps.dashboard.urls', namespace="dashboard")),
    url(r'^programmes/', include('radio.apps.programmes.urls', namespace="programmes")),
    url(r'^users/', include('radio.apps.users.urls', namespace="users")),

    url(r'^api/1/recording_schedules/$', 'radio.libs.home.views.recording_schedules', name="recording_schedules"),
    url(r'^api/1/submit_recorder/$', 'radio.libs.home.views.submit_recorder', name="submit_recorder"),
)

urlpatterns += i18n_patterns('',
    url(r'^admin/', include(admin.site.urls)),
)

# Media
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

"""
from django.utils.translation import activate
activate('es')
"""
